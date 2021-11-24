const Seeder = require("../../Core/Seeder");

module.exports = class Class extends Seeder{
    static tableName = "class";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Class
	 * @param {number} data.attack Attack
	 * @param {number} data.health Health
	 * @param {number} data.speed Speed
	 * @param {number} data.defense Defense
     */
    static async Seed(data){
        if(typeof data.attack != "undefined"){
			if(typeof data.attack !== "number"){
				throw new Error('attack must be typeof number');
			}
		}
		else {
			data.attack = Math.round(Math.random() * 255);
		}
		if(typeof data.health != "undefined"){
			if(typeof data.health !== "number"){
				throw new Error('health must be typeof number');
			}
		}
		else {
			data.health = Math.round(Math.random() * 255);
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