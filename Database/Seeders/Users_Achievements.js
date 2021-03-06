const Seeder = require("../../Core/Seeder");

module.exports = class Users_Achievements extends Seeder{
    static tableName = "users_achievements";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Users_Achievements
	 * @param {number} data.user_id User_Id
	 * @param {number} data.achievement_id Achievement_Id
	 * @param {number} data.progress_value Progress_Value
	 * @param {number} data.required_value Required_Value
     */
    static async Seed(data){
        if(typeof data.user_id != "undefined"){
			if(typeof data.user_id !== "number"){
				throw new Error('user_id must be typeof number');
			}
		}
		else {
			data.user_id = Math.round(Math.random() * 255);
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