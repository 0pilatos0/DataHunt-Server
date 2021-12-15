const Seeder = require("../../Core/Seeder");

module.exports = class Items_Stats extends Seeder{
    static tableName = "items_stats";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Items_Stats
	 * @param {number} data.required_level Required_Level
	 * @param {number} data.min_value Min_Value
	 * @param {number} data.max_value Max_Value
     */
    static async Seed(data){
        if(typeof data.required_level != "undefined"){
			if(typeof data.required_level !== "number"){
				throw new Error('required_level must be typeof number');
			}
		}
		else {
			data.required_level = Math.round(Math.random() * 255);
		}
		if(typeof data.min_value != "undefined"){
			if(typeof data.min_value !== "number"){
				throw new Error('min_value must be typeof number');
			}
		}
		else {
			data.min_value = Math.round(Math.random() * 255);
		}
		if(typeof data.max_value != "undefined"){
			if(typeof data.max_value !== "number"){
				throw new Error('max_value must be typeof number');
			}
		}
		else {
			data.max_value = Math.round(Math.random() * 255);
		};
        await super.Seed(data);
    }
}