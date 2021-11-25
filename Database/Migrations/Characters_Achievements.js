const Table = require("../../Core/Database/Table")

module.exports = class Characters_Achievements extends Table{
    constructor() {
        super()
    }

    static async Migrate(){
        await this.create('characters_achievements', {
            character_id: "INT NN",
            achievement_id: "INT NN",
            progress_value: "INT NN",
            required_value: "INT NN"
        })
    }
}