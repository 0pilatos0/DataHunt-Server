const Table = require("../../Core/Database/Table")

module.exports = class Items extends Table{
    constructor() {
        super()
        this.create('items', {
            name: "VARCHAR(255) NN",
            items_stats_id: "INT NN",
            type: "INT NN",
            rarity: "INT NN",
            stats_range: "INT NN",
            texture: "INT NN",
        })
    }
}