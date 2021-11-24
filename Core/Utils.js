module.exports = class Utils{
    constructor() {
        
    }

    static get URL(){
        return `http://${process.env.HOST}${process.env.PORT != 80 && process.env.PORT != 8080 ? `:${process.env.PORT}` : ""}`
    }

    static firstCharToUpperPerWord(word){
        return word.replace(/(^|\s|_)[a-z]/g, function(f){return f.toUpperCase();});
    }
}