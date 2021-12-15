const Table = require("../../Core/Database/Table")

module.exports = class Class extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('class', {
            attack: "INT NN",
            health: "INT NN",
            speed: "INT NN",
            defense: "INT NN"
        })
    }
}