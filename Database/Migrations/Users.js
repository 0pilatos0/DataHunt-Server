const Table = require("../../Core/Database/Table")

module.exports = class Users extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('users', {
            name: "VARCHAR(255) NN",
            username: "VARCHAR(255) U NN",
            email: "VARCHAR(255) NN",
            password: "VARCHAR(255) NN",
            enabled: "BOOLEAN NN DEFAULT 1",
            resetpassword: "VARCHAR(255)",
            verifytoken: "VARCHAR(255)",
            verified: "BOOLEAN DEFAULT 0",
            resettoken: "VARCHAR(255)"
        })
    }
}