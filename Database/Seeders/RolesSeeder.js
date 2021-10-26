const Seeder = require('../../Core/Seeder')

module.exports = class RolesSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table roles
	 * @param {string} data.name Name
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
			for (let i = 0; i < 100; i++) {
				data.name += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"roles", data})
	}
}