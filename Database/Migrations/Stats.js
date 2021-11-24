const Table = require("../../Core/Database/Table")

module.exports = class Stats extends Table{
    constructor() {
        super()
        this.create('stats', {
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