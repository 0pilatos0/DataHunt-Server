const Table = require("../../Core/Database/Table")

module.exports = class Items_Stats extends Table{
    constructor() {
        super()
        this.create('items_stats', {
            required_level: "INT NN",
            min_value: "INT NN",
            max_value: "INT NN",
        })
    }
}