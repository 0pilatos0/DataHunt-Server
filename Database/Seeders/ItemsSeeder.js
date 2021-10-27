const Seeder = require('../../Core/Seeder')

module.exports = class ItemsSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table items
	 * @param {string} data.name Name
	 * @param {number} data.required_level Required_level
	 * @param {string} data.type Type
	 * @param {number} data.rarity Rarity
	 * @param {number} data.min_value Min_value
	 * @param {number} data.max_value Max_value
	 * @param {string} data.texture Texture
	 */
	static async Seed(data){
		if(typeof data.name != 'undefined'){
			if(typeof data.name !== 'string'){
				throw new Error('name must be typeof string')
			}
		}
		else {
			data.name = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 25; i++) {
				data.name += chars[Math.round(Math.random() * chars.length)]
			}
		}
		if(typeof data.required_level != 'undefined'){
			if(typeof data.required_level !== 'number'){
				throw new Error('required_level must be typeof number')
			}
		}
		else {
			data.required_level = Math.round(Math.random() * 255)
		}
		if(typeof data.type != 'undefined'){
			if(typeof data.type !== 'string'){
				throw new Error('type must be typeof string')
			}
		}
		else {
			data.type = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 25; i++) {
				data.type += chars[Math.round(Math.random() * chars.length)]
			}
		}
		if(typeof data.rarity != 'undefined'){
			if(typeof data.rarity !== 'number'){
				throw new Error('rarity must be typeof number')
			}
		}
		else {
			data.rarity = Math.round(Math.random() * 255)
		}
		if(typeof data.min_value != 'undefined'){
			if(typeof data.min_value !== 'number'){
				throw new Error('min_value must be typeof number')
			}
		}
		else {
			data.min_value = Math.round(Math.random() * 255)
		}
		if(typeof data.max_value != 'undefined'){
			if(typeof data.max_value !== 'number'){
				throw new Error('max_value must be typeof number')
			}
		}
		else {
			data.max_value = Math.round(Math.random() * 255)
		}
		if(typeof data.texture != 'undefined'){
			if(typeof data.texture !== 'string'){
				throw new Error('texture must be typeof string')
			}
		}
		else {
			data.texture = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 1024; i++) {
				data.texture += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"items", data})
	}
}