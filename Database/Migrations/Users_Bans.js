const Table = require("../../Core/Database/Table")

module.exports = class Users_Bans extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await  this.create('users_bans', {
            user_id: "INT NN",
            banned_by: "INT NN",
            until: "datetime NN"
        })
    }
}