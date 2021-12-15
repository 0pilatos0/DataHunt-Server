const Seeder = require("../../Core/Seeder");

module.exports = class Characters_Achievements extends Seeder{
    static tableName = "characters_achievements";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Characters_Achievements
	 * @param {number} data.character_id Character_Id
	 * @param {number} data.achievement_id Achievement_Id
	 * @param {number} data.progress_value Progress_Value
	 * @param {number} data.required_value Required_Value
     */
    static async Seed(data){
        if(typeof data.character_id != "undefined"){
			if(typeof data.character_id !== "number"){
				throw new Error('character_id must be typeof number');
			}
		}
		else {
			data.character_id = Math.round(Math.random() * 255);
		}
		if(typeof data.achievement_id != "undefined"){
			if(typeof data.achievement_id !== "number"){
				throw new Error('achievement_id must be typeof number');
			}
		}
		else {
			data.achievement_id = Math.round(Math.random() * 255);
		}
		if(typeof data.progress_value != "undefined"){
			if(typeof data.progress_value !== "number"){
				throw new Error('progress_value must be typeof number');
			}
		}
		else {
			data.progress_value = Math.round(Math.random() * 255);
		}
		if(typeof data.required_value != "undefined"){
			if(typeof data.required_value !== "number"){
				throw new Error('required_value must be typeof number');
			}
		}
		else {
			data.required_value = Math.round(Math.random() * 255);
		};
        await super.Seed(data);
    }
}