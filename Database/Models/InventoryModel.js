const Model = require('../../Core/Model')

module.exports = class InventoryModel extends Model {
	static table = 'inventory'
	constructor(){
		super()
	}
}