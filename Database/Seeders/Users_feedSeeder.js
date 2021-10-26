const Seeder = require('../../Core/Seeder')

module.exports = class Users_feedSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table users_feed
	 * @param {number} data.user_id User_id
	 * @param {string} data.message Message
	 * @param {Date} data.time Time
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
		if(typeof data.message != 'undefined'){
			if(typeof data.message !== 'string'){
				throw new Error('message must be typeof string')
			}
		}
		else {
			data.message = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 100; i++) {
				data.message += chars[Math.round(Math.random() * chars.length)]
			}
		}
		if(typeof data.time != 'undefined'){
			if(typeof data.time !== 'Date'){
				throw new Error('time must be typeof Date')
			}
		}
		else {
			data.time = new Date(`${new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toISOString().slice(0, 19).replace('T', ' ')}`)
		}
		await super.Seed({tableName:"users_feed", data})
	}
}