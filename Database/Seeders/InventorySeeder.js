const Seeder = require('../../Core/Seeder')

module.exports = class InventorySeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table inventory
	 * @param {number} data.character_id Character_id
	 * @param {string} data.json Json
	 */
	static async Seed(data){
		if(typeof data.character_id != 'undefined'){
			if(typeof data.character_id !== 'number'){
				throw new Error('character_id must be typeof number')
			}
		}
		else {
			data.character_id = Math.round(Math.random() * 255)
		}
		if(typeof data.json != 'undefined'){
			if(typeof data.json !== 'string'){
				throw new Error('json must be typeof string')
			}
		}
		else {
			data.json = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 1024; i++) {
				data.json += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"inventory", data})
	}
}