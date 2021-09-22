const fs = require('fs')

module.exports = class HTMLLoader{
    constructor() {
        
    }

    static Read(path){
        return fs.readFileSync(path, {encoding:'utf8', flag:'r'})
    }
}