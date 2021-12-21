const Table = require("../../Core/Database/Table")

module.exports = class Stats extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('stats', {
            character_id: "INT NN",
            money: "INT NN",
            exp: "INT NN",
            level: "INT NN",
            health: "INT NN",
            attack: "INT NN",
            speed: "INT NN",
            defense: "INT NN"
        })
    }
}