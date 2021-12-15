const Table = require("../../Core/Database/Table")

module.exports = class Users_Feed extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('users_feed', {
            user_id: "INT NN",
            message: "LONGTEXT NN",
            time: "timestamp NN"
        })
    }
}