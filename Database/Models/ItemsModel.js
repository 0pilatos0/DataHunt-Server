const Model = require('../../Core/Model')

module.exports = class ItemsModel extends Model {
	static table = 'items'
	constructor(){
		super()
	}
}