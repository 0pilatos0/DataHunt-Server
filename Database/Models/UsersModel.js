const Model = require('../../Core/Model')

module.exports = class UsersModel extends Model {
	static table = 'users'
	constructor(){
		super()
	}
}