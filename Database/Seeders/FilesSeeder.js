const Seeder = require('../../Core/Seeder')

module.exports = class FilesSeeder extends Seeder {
	constructor(){
		super()
	}

	/**
	 *
	 * @param {Object} data to seed table files
	 * @param {string} data.name Name
	 * @param {string} data.file File
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
		if(typeof data.file != 'undefined'){
			if(typeof data.file !== 'string'){
				throw new Error('file must be typeof string')
			}
		}
		else {
			data.file = ''
			const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
			for (let i = 0; i < 100; i++) {
				data.file += chars[Math.round(Math.random() * chars.length)]
			}
		}
		await super.Seed({tableName:"files", data})
	}
}