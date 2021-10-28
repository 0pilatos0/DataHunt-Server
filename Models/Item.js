const Model = require('../Core/Model');

module.exports = class Item extends Model{
    static table = "items";
    constructor() {
        super();
    }

    static async Get(id) {
        return this.Find({
            where: {
                'id': id
            }, 
            select: '*'
        })
    }

    static async GetInventoryItem(id) {
        return this.Find({
            where: {
                'id': id
            }, 
            select: [
                'name', 'required_level', 'type', 'rarity', 'texture'
            ]
        })
    }
}