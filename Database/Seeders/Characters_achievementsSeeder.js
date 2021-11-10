const Seeder = require('../../Core/Seeder')

module.exports = class Characters_achievementsSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table characters_achievements
	 * @param {number} data.character_id Character_id
	 * @param {number} data.achievement_id Achievement_id
	 * @param {number} data.progress_value Progress_value
	 * @param {number} data.required_value Required_value
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
		if(typeof data.achievement_id != 'undefined'){
			if(typeof data.achievement_id !== 'number'){
				throw new Error('achievement_id must be typeof number')
			}
		}
		else {
			data.achievement_id = Math.round(Math.random() * 255)
		}
		if(typeof data.progress_value != 'undefined'){
			if(typeof data.progress_value !== 'number'){
				throw new Error('progress_value must be typeof number')
			}
		}
		else {
			data.progress_value = Math.round(Math.random() * 255)
		}
		if(typeof data.required_value != 'undefined'){
			if(typeof data.required_value !== 'number'){
				throw new Error('required_value must be typeof number')
			}
		}
		else {
			data.required_value = Math.round(Math.random() * 255)
		}
		await super.Seed({tableName:"characters_achievements", data})
	}
}