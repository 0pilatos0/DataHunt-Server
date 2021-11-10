const Seeder = require('../../Core/Seeder')

module.exports = class Profile_picturesSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table profile_pictures
	 * @param {number} data.user_id User_id
	 * @param {string} data.image Image
	 */
	static async Seed(data){
		if(typeof data.user_id != 'undefined'){
			if(typeof data.user_id !== 'number'){
				throw new Error('user_id must be typeof number')
			}
		}
		else {
			data.user_id = Math.round(Math.random() * 255)
		}
		if(typeof data.image != 'undefined'){
			if(typeof data.image !== 'string'){
				throw new Error('image must be typeof string')
			}
		}
		else {
			data.image = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 1024; i++) {
				data.image += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"profile_pictures", data})
	}
}