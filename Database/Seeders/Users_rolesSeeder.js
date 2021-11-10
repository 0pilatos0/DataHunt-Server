const Seeder = require('../../Core/Seeder')

module.exports = class Users_rolesSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table users_roles
	 * @param {number} data.user_id User_id
	 * @param {number} data.role_id Role_id
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
		if(typeof data.role_id != 'undefined'){
			if(typeof data.role_id !== 'number'){
				throw new Error('role_id must be typeof number')
			}
		}
		else {
			data.role_id = Math.round(Math.random() * 255)
		}
		await super.Seed({tableName:"users_roles", data})
	}
}