const Table = require("../../Core/Database/Table")

module.exports = class Profile_Pictures extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('profile_pictures', {
            user_id: "INT NN",
            image: "LONGTEXT"
        })
    }
}