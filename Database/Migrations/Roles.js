const Table = require("../../Core/Database/Table")

module.exports = class Roles extends Table{
    constructor() {
        super()
        this.create('roles', {
            name: "VARCHAR(255) NN"
        })
    }
}