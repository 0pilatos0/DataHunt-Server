const fs = require('fs')
const path = `${__dirname}/log.txt`

module.exports = class SeederLogger{
    constructor() {
        
    }

    static Start(message){
        fs.writeFileSync(path, `${new Date(Date.now()).toLocaleString()}: ${message} \r\n`)
    }

    static Log(message){
        fs.appendFileSync(path, `${new Date(Date.now()).toLocaleString()}: ${message} \r\n`)
    }
}