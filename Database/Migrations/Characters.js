const Table = require("../../Core/Database/Table")

module.exports = class Characters extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('characters', {
            name: "VARCHAR(255) NN",
            user_id: "INT NN",
            class_id: "INT NN",
            stats_id: "INT NN",
            kills: "INT NN",
            deaths: "INT NN",
            level: "INT NN"
        })
    }
}