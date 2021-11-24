const Seeder = require("../../Core/Seeder");

module.exports = class Characters extends Seeder{
    static tableName = "characters";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Characters
	 * @param {string} data.name Name
	 * @param {number} data.user_id User_Id
	 * @param {number} data.class_id Class_Id
	 * @param {number} data.stats_id Stats_Id
	 * @param {number} data.kills Kills
	 * @param {number} data.deaths Deaths
	 * @param {number} data.level Level
     */
    static async Seed(data){
        if(typeof data.name != "undefined"){
			if(typeof data.name !== "string"){
				throw new Error('name must be typeof string');
			}
		}
		else {
			data.name = "";
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("");
			for (let i = 0; i < 25; i++) {
				data.name += chars[Math.round(Math.random() * chars.length)];
			}
		}
		if(typeof data.user_id != "undefined"){
			if(typeof data.user_id !== "number"){
				throw new Error('user_id must be typeof number');
			}
		}
		else {
			data.user_id = Math.round(Math.random() * 255);
		}
		if(typeof data.class_id != "undefined"){
			if(typeof data.class_id !== "number"){
				throw new Error('class_id must be typeof number');
			}
		}
		else {
			data.class_id = Math.round(Math.random() * 255);
		}
		if(typeof data.stats_id != "undefined"){
			if(typeof data.stats_id !== "number"){
				throw new Error('stats_id must be typeof number');
			}
		}
		else {
			data.stats_id = Math.round(Math.random() * 255);
		}
		if(typeof data.kills != "undefined"){
			if(typeof data.kills !== "number"){
				throw new Error('kills must be typeof number');
			}
		}
		else {
			data.kills = Math.round(Math.random() * 255);
		}
		if(typeof data.deaths != "undefined"){
			if(typeof data.deaths !== "number"){
				throw new Error('deaths must be typeof number');
			}
		}
		else {
			data.deaths = Math.round(Math.random() * 255);
		}
		if(typeof data.level != "undefined"){
			if(typeof data.level !== "number"){
				throw new Error('level must be typeof number');
			}
		}
		else {
			data.level = Math.round(Math.random() * 255);
		};
        super.Seed(data);
    }
}