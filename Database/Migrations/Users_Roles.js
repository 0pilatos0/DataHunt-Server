const Table = require("../../Core/Database/Table")

module.exports = class Users_Roles extends Table{
    constructor() {
        super()
        this.create('users_roles', {
            user_id: "INT NN",
            role_id: "INT NN"
        })
    }
}