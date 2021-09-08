module.exports = function HandleUser(socket){
    socket.on('login', async (data) => {
        console.log(data)
        let errors = []
        if(data.email){
            
        }
        else{
            errors.push('Email must be filled in')
        }
        if(data.password){

        }
        else{
            errors.push('Password must be filled in')
        }
        socket.emit('login')
    })

    socket.on('register', async (data) => {
        //console.log(data)
        let errors = []
        if(data.name != null){
            const nameRegex = /^[a-z ,.'-]+$/i
            if(nameRegex.test(data.name)){

            }
            else{
                errors.push('Name doesn\'t match regex')
            }
        }
        else{
            errors.push('Name must be filled in')
        }
        if(data.username != null){
            const usernameRegex = /\w{5,29}/i
            if(usernameRegex.test(data.username)){

            }
            else{
                errors.push('Username doesn\'t match regex')
            }
        }
        else{
            errors.push('Username must be filled in')
        }
        if(data.email != null){
            const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            if(emailRegex.test(data.email)){
                
            }
            else{
                errors.push('Email doesn\'t match regex')
            }
        }
        else{
            errors.push('Email must be filled in')
        }
        if(data.password != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(passwordRegex.test(data.password)){

            }
            else{
                errors.push('Password doesn\'t match regex')
            }
        }
        else{
            errors.push('Password must be filled in')
        }
        if(data.confirmPassword != null){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(passwordRegex.test(data.confirmPassword) && data.password.match(data.confirmPassword)){

            }
            else{
                errors.push('Passwords doesn\'t match eachother')
            }
        }
        else{
            errors.push('Confirmation password must be filled in')
        }
        socket.emit('register')
    })

    socket.on('logout', (data) => {
        console.log(data)
    })
}