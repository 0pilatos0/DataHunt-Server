const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require("../Models/User")

module.exports = function HandleUser(socket){
    socket.on('login', async (data) => {
        //console.log(data)
        let errors = []
        let success = []
        if(!data.email){
            errors.push('Email must be filled in')
        }
        if(!data.password){
            errors.push('Password must be filled in')
        }
        let user = await User.Find({
            where:{
                email: data.email
            }
        })
        if(user !== false){
            if(!user.verified){
                errors.push("You must verify your account before being able to login")
            }
            if(!user.enabled){
                errors.push("Your account is disabled because you are banned")
            }
            if(errors.length == 0){
                if(!Salter.VerifyPassword(data.password, user.password)){
                    errors.push("Your username or password is incorrect")
                }
                success.push("You successfully logged in")
            }
        }
        else{
            errors.push("Your username or password is incorrect")
        }
        socket.emit('login', {
            errors,
            success
        })
    })

    socket.on('register', async (data) => {
        //console.log(data)
        let errors = []
        let success = []
        if(data.name != null){
            const nameRegex = /^[a-z ,.'-]+$/i
            if(!nameRegex.test(data.name)){
                errors.push(`Name can't contain numbers`)
            }
        }
        else{
            errors.push('Name must be filled in')
        }
        if(data.username != null){
            const usernameRegex = /\w{5,29}/i
            if(!usernameRegex.test(data.username)){
                errors.push('Username must be between 5 and 29 characters long')
            }
        }
        else{
            errors.push('Username must be filled in')
        }
        if(data.email != null){
            if(!Regex.Email.test(data.email)){
                errors.push(`Email must contain an '@'`)
            }
        }
        else{
            errors.push('Email must be filled in')
        }
        if(data.password != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(!passwordRegex.test(data.password)){
                errors.push('Password must be atleast 8 characters long, contain an special character and 1 number and 1 uppercase')
            }
        }
        else{
            errors.push('Password must be filled in')
        }
        if(data.confirmPassword != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(!passwordRegex.test(data.confirmPassword) && data.password != data.confirmPassword){
                errors.push('Passwords must be the same')
            }
        }
        else{
            errors.push('Confirmation password must be filled in')
        }
        if(errors.length == 0){
            let verifyToken = Salter.GenerateRandomToken()
            let existingUser = await User.FindId({
                where: {
                    username: data.username,
                    email: data.email
                }
            })
            if(existingUser == false){
                let createdUser = await User.Create({
                    create:{
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        password: Salter.HashPassword(data.password),
                        verifyToken: verifyToken
                    }
                })
                //console.log(createdUser)
                let htmlData = HTMLLoader.Read("./Mail/activationMail.html")
                htmlData = htmlData.replace('{{url}}', `http://${process.env.WEBSITEHOST}:${process.env.WEBSITEPORT}/verify?token=${verifyToken}`)
                htmlData = htmlData.replace('{{username}}', data.username)
                let mailState = await Mailer.SendMail({
                    to: data.email,
                    subject: 'DataHunt user registration',
                    html: htmlData
                })
                success.push("You now received an email with a verification link to verify your account")
            }
            else{
                errors.push("Account with that email or username already exists")
            }
        }
        socket.emit('register', {
            errors,
            success
        })
    })

    socket.on('logout', (data) => {
        console.log(data)
    })

    socket.on('forgotPass', async (data) => {
        let errors = []
        let success = []
        if(data.email != null){
            if(!Regex.Email.test(data.email)){
                errors.push(`Email must contain an '@'`)
            }
        }
        let existingUser = await User.FindId({
            where: {
                email: data.email
            }
        })
        console.log(existingUser)
        if(existingUser){
            let verified = await User.Find({
                where: {
                    email: data.email,
                    verified: 1
                }
            })
            console.log(verified)
            if(verified != false){
                
                console.log("TODO send mail with reset link")
                let token = Salter.GenerateRandomToken()  
                let updatedUser = await User.Update({
                    where: {
                        email: data.email
                    },
                    set: {
                        resettoken: token
                    }
                })

                let htmlData = HTMLLoader.Read("./Mail/resetPasswordMail.html")
                htmlData = htmlData.replace('{{url}}', `http://${process.env.WEBSITEHOST}:${process.env.WEBSITEPORT}/resetpassword?token=${token}`)
                htmlData = htmlData.replace('{{username}}', verified.username)
                let mailState = await Mailer.SendMail({
                    to: data.email,
                    subject: 'DataHunt reset password',
                    html: htmlData
                })

                //TODO send mail with reset link + token

                success.push("You now received an email with a reset link")
            } else{
                errors.push("Account is not verified")
            }
        } else{
            errors.push("Account with that email does not exist")
        }
        console.log(errors)
        socket.emit('forgotPass', {
            errors,
            success
        })

    })
}