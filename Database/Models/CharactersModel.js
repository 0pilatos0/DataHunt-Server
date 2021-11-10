const Model = require('../../Core/Model')

module.exports = class CharactersModel extends Model {
	static table = 'characters'
	constructor(){
		super()
	}
}