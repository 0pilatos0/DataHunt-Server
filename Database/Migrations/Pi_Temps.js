const Table = require("../../Core/Database/Table")

module.exports = class Pi_Temps extends Table{
    constructor() {
        super()
        this.create('pi_temps', {
            temp: "VARCHAR(255) NN",
        })
    }
}