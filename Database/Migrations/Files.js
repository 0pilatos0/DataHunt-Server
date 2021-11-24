const Table = require("../../Core/Database/Table")

module.exports = class Files extends Table{
    constructor() {
        super()
        this.create('files', {
            name: "LONGTEXT NN",
            file: "LONGBLOB NN"
        })
    }
}