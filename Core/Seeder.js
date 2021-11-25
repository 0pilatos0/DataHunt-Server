const MySQL = require("./MySQL")

module.exports = class Seeder{
    constructor(){

    }

    static async Seed(data){
        let questionMarkString = "";
        Object.keys(data).map(key => {
            questionMarkString += "?";
            if(Object.keys(data).indexOf(key) != Object.keys(data).length - 1){
                questionMarkString += ", ";
            }
        });
        return await MySQL.Query(`INSERT INTO ${this.tableName} (${Object.keys(data).join(', ')}) VALUES (${questionMarkString})`, Object.values(data));
    }
}