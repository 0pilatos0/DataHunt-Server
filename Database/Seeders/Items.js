const Seeder = require("../../Core/Seeder");

module.exports = class Items extends Seeder{
    static tableName = "items";

    constructor(){
        super();
    }

    /**
     * @param {Object} data to seed table Items
	 * @param {string} data.name Name
	 * @param {number} data.items_stats_id Items_Stats_Id
	 * @param {number} data.type Type
	 * @param {number} data.rarity Rarity
	 * @param {number} data.stats_range Stats_Range
	 * @param {number} data.texture Texture
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
		if(typeof data.items_stats_id != "undefined"){
			if(typeof data.items_stats_id !== "number"){
				throw new Error('items_stats_id must be typeof number');
			}
		}
		else {
			data.items_stats_id = Math.round(Math.random() * 255);
		}
		if(typeof data.type != "undefined"){
			if(typeof data.type !== "number"){
				throw new Error('type must be typeof number');
			}
		}
		else {
			data.type = Math.round(Math.random() * 255);
		}
		if(typeof data.rarity != "undefined"){
			if(typeof data.rarity !== "number"){
				throw new Error('rarity must be typeof number');
			}
		}
		else {
			data.rarity = Math.round(Math.random() * 255);
		}
		if(typeof data.stats_range != "undefined"){
			if(typeof data.stats_range !== "number"){
				throw new Error('stats_range must be typeof number');
			}
		}
		else {
			data.stats_range = Math.round(Math.random() * 255);
		}
		if(typeof data.texture != "undefined"){
			if(typeof data.texture !== "number"){
				throw new Error('texture must be typeof number');
			}
		}
		else {
			data.texture = Math.round(Math.random() * 255);
		};
        await super.Seed(data);
    }
}