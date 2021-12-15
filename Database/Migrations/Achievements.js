const Table = require("../../Core/Database/Table")

module.exports = class Achievements extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('achievements', {
            name: "VARCHAR(255) NN",
            description: "LONGTEXT NN",
            achievement_type: "VARCHAR(255) NN"
        })
    }
}