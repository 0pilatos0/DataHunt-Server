const Model = require('../Core/Model');

module.exports = class Item extends Model{
    static table = "items";
    constructor() {
        super();
    }

    static async GetItem(id) {
        return this.Find({
            where: {
                'id': id
            }, 
            select: '*'
        })
    }
}