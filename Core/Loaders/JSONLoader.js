const fs = require('fs');

module.exports = class JSONLoader{
    constructor() {
        
    }

    static Load(path){
        return JSON.parse(fs.readFileSync(path, 'utf-8'))
    }
}