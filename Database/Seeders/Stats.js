const Seeder = require("../../Core/Seeder");

module.exports = class Stats extends Seeder{
    static tableName = "stats";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Stats
	 * @param {number} data.user_id User_Id
	 * @param {number} data.money Money
	 * @param {number} data.exp Exp
	 * @param {number} data.level Level
	 * @param {number} data.health Health
	 * @param {number} data.attack Attack
	 * @param {number} data.speed Speed
	 * @param {number} data.defense Defense
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
		if(typeof data.money != "undefined"){
			if(typeof data.money !== "number"){
				throw new Error('money must be typeof number');
			}
		}
		else {
			data.money = Math.round(Math.random() * 255);
		}
		if(typeof data.exp != "undefined"){
			if(typeof data.exp !== "number"){
				throw new Error('exp must be typeof number');
			}
		}
		else {
			data.exp = Math.round(Math.random() * 255);
		}
		if(typeof data.level != "undefined"){
			if(typeof data.level !== "number"){
				throw new Error('level must be typeof number');
			}
		}
		else {
			data.level = Math.round(Math.random() * 255);
		}
		if(typeof data.health != "undefined"){
			if(typeof data.health !== "number"){
				throw new Error('health must be typeof number');
			}
		}
		else {
			data.health = Math.round(Math.random() * 255);
		}
		if(typeof data.attack != "undefined"){
			if(typeof data.attack !== "number"){
				throw new Error('attack must be typeof number');
			}
		}
		else {
			data.attack = Math.round(Math.random() * 255);
		}
		if(typeof data.speed != "undefined"){
			if(typeof data.speed !== "number"){
				throw new Error('speed must be typeof number');
			}
		}
		else {
			data.speed = Math.round(Math.random() * 255);
		}
		if(typeof data.defense != "undefined"){
			if(typeof data.defense !== "number"){
				throw new Error('defense must be typeof number');
			}
		}
		else {
			data.defense = Math.round(Math.random() * 255);
		};
        await super.Seed(data);
    }
}