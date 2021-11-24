const Seeder = require("../../Core/Seeder");

module.exports = class Users_Feed extends Seeder{
    static tableName = "users_feed";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Users_Feed
	 * @param {number} data.user_id User_Id
	 * @param {string} data.message Message
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
		if(typeof data.message != "undefined"){
			if(typeof data.message !== "string"){
				throw new Error('message must be typeof string');
			}
		}
		else {
			data.message = "";
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("");
			for (let i = 0; i < 25; i++) {
				data.message += chars[Math.round(Math.random() * chars.length)];
			}
		};
        super.Seed(data);
    }
}