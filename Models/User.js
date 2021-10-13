const Model = require('../Core/Model');

module.exports = class User extends Model{
    static table = "users";
    constructor() {
        super();
    }
}