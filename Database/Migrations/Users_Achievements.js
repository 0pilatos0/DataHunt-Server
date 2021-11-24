const Table = require("../../Core/Database/Table")

module.exports = class Users_Achievements extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('users_achievements', {
            user_id: "INT NN",
            achievement_id: "INT NN",
            progress_value: "INT NN",
            required_value: "INT NN"
        })
    }
}