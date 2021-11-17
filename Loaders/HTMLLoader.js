const fs = require('fs')

module.exports = class HTMLLoader{
    constructor() {
        
    }
    
    /**
     * Loads the HTML file
     * @param {String} path
     * @returns {String}
     */
    static Read(path){
        return fs.readFileSync(path, {encoding:'utf8', flag:'r'})
    }
}