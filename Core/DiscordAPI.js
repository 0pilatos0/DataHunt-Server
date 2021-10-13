const https = require('https')
require('dotenv').config()

const options = {
    hostname: 'discord.com',
    path: process.env.DISCORDAPI,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

module.exports.DiscordAPI = class{
    constructor(){
        
    }

    static Send(message){
        const req = https.request(options, (res) => {})
        .on('error', (err) => {
            console.log("Error: ", err.message)
        })
        req.write(JSON.stringify({ content: message }))
        req.end()
    }
}