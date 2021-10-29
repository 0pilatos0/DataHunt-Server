const Seeder = require('../../Core/Seeder')

module.exports = class AchievementsSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table achievements
	 * @param {string} data.name Name
	 * @param {string} data.description Description
	 * @param {string} data.achievement_type Achievement_type
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
		if(typeof data.description != 'undefined'){
			if(typeof data.description !== 'string'){
				throw new Error('description must be typeof string')
			}
		}
		else {
			data.description = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 1024; i++) {
				data.description += chars[Math.round(Math.random() * chars.length)]
			}
		}
		if(typeof data.achievement_type != 'undefined'){
			if(typeof data.achievement_type !== 'string'){
				throw new Error('achievement_type must be typeof string')
			}
		}
		else {
			data.achievement_type = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 25; i++) {
				data.achievement_type += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"achievements", data})
	}
}