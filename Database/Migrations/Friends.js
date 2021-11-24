const Table = require("../../Core/Database/Table")

module.exports = class Friends extends Table{
    constructor() {
        super()
        this.create('friends', {
            user_id: "INT NN",
            sender_id: "INT NN",
            receiver_id: "INT NN",
            status: "VARCHAR(255) NN"
        })
    }
}