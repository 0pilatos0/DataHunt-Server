const Seeder = require('../../Core/Seeder')

module.exports = class FriendsSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table friends
	 * @param {number} data.user_id User_id
	 * @param {number} data.sender_id Sender_id
	 * @param {number} data.receiver_id Receiver_id
	 * @param {string} data.status Status
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
		if(typeof data.sender_id != 'undefined'){
			if(typeof data.sender_id !== 'number'){
				throw new Error('sender_id must be typeof number')
			}
		}
		else {
			data.sender_id = Math.round(Math.random() * 255)
		}
		if(typeof data.receiver_id != 'undefined'){
			if(typeof data.receiver_id !== 'number'){
				throw new Error('receiver_id must be typeof number')
			}
		}
		else {
			data.receiver_id = Math.round(Math.random() * 255)
		}
		if(typeof data.status != 'undefined'){
			if(typeof data.status !== 'string'){
				throw new Error('status must be typeof string')
			}
		}
		else {
			data.status = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 100; i++) {
				data.status += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"friends", data})
	}
}