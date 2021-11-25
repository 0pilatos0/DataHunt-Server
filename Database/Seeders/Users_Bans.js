const Seeder = require("../../Core/Seeder");

module.exports = class Users_Bans extends Seeder{
    static tableName = "users_bans";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Users_Bans
	 * @param {number} data.user_id User_Id
	 * @param {number} data.banned_by Banned_By
	 * @param {Date} data.until Until
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
		if(typeof data.banned_by != "undefined"){
			if(typeof data.banned_by !== "number"){
				throw new Error('banned_by must be typeof number');
			}
		}
		else {
			data.banned_by = Math.round(Math.random() * 255);
		}
		if(typeof data.until != "undefined"){
			if(typeof data.until !== "Date"){
				throw new Error('until must be typeof Date');
			}
		}
		else {
			};
        await super.Seed(data);
    }
}