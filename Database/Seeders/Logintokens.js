const Seeder = require("../../Core/Seeder");

module.exports = class Logintokens extends Seeder{
    static tableName = "logintokens";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Logintokens
	 * @param {number} data.user_id User_Id
	 * @param {string} data.token Token
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
		if(typeof data.token != "undefined"){
			if(typeof data.token !== "string"){
				throw new Error('token must be typeof string');
			}
		}
		else {
			data.token = "";
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("");
			for (let i = 0; i < 25; i++) {
				data.token += chars[Math.round(Math.random() * chars.length)];
			}
		};
        await super.Seed(data);
    }
}