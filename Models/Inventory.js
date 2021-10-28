const Model = require('../Core/Model');

module.exports = class Inventory extends Model{
    static table = "inventory";
    constructor() {
        super();
    }

    static async Get(id) {
        return await this.Find({
            where: {
                'id': id
            }
        })
    }
}