const Seeder = require("../../Core/Seeder");

module.exports = class Pi_Temps extends Seeder{
    static tableName = "pi_temps";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Pi_Temps
	 * @param {string} data.temp Temp
     */
    static async Seed(data){
        if(typeof data.temp != "undefined"){
			if(typeof data.temp !== "string"){
				throw new Error('temp must be typeof string');
			}
		}
		else {
			data.temp = "";
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("");
			for (let i = 0; i < 25; i++) {
				data.temp += chars[Math.round(Math.random() * chars.length)];
			}
		};
        super.Seed(data);
    }
}