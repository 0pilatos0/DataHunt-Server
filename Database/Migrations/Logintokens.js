const Table = require("../../Core/Database/Table")

module.exports = class Logintokens extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('logintokens', {
            user_id: "INT NN",
            token: "VARCHAR(255) NN"
        })
    }
}