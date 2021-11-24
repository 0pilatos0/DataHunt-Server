const Table = require("../../Core/Database/Table")

module.exports = class Level extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('level', {
            user_id: "INT NN",
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