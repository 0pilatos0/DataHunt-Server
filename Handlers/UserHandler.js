const Mailer = require("../Core/Mailer")
const { Salter } = require("../Core/Salter")
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
                errors.push('Name doesn\'t match regex')
            }
        }
        else{
            errors.push('Name must be filled in')
        }
        if(data.username != null){
            const usernameRegex = /\w{5,29}/i
            if(!usernameRegex.test(data.username)){
                errors.push('Username doesn\'t match regex')
            }
        }
        else{
            errors.push('Username must be filled in')
        }
        if(data.email != null){
            const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            if(!emailRegex.test(data.email)){
                errors.push('Email doesn\'t match regex')
            }
        }
        else{
            errors.push('Email must be filled in')
        }
        if(data.password != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(!passwordRegex.test(data.password)){
                errors.push('Password doesn\'t match regex')
            }
        }
        else{
            errors.push('Password must be filled in')
        }
        if(data.confirmPassword != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(!passwordRegex.test(data.confirmPassword) && data.password != data.confirmPassword){
                errors.push('Passwords doesn\'t match eachother')
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
                htmlData = htmlData.replace('{{url}}', `http://${process.env.WEBSITEHOST}:${process.env.WEBSITEPORT}/verify?verifytoken=${verifyToken}`)
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
}