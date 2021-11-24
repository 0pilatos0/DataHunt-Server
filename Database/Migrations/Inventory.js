const Table = require("../../Core/Database/Table")

module.exports = class Inventory extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('inventory', {
            character_id: "INT NN",
            json: "LONGTEXT NN"
        })
    }
}