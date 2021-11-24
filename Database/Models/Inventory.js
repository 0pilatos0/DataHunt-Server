const Model = require("../../Core/Model");

module.exports = class Inventory extends Model {
    static table = "inventory";

    constructor(){
        super();
    }

    /**
     * @returns {InventoryObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {InventoryObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<InventoryObject>}
     */
    static async Select({select = [], where = {}, orderBy, limit, joins = []}){
        return super.Select({select, where, orderBy, limit, joins});
    }

    /**
     * @returns {Boolean}
     */
    static async Create({create = {}}){
        return super.Create({create});
    }

    /**
     * @returns {Boolean}
     */
    static async Update({where = {}, set = {}}){
        return super.Update({where, set});
    }

    /**
     * @returns {Boolean}
     */
    static async Delete({where = {}}){
        return super.Delete({where});
    }

    /**
     * @returns {Array.<InventoryObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {InventoryObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {InventoryObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} InventoryObject
 * @property {number} id
 * @property {number} character_id
 * @property {string} json
 * @property {Date} created_at
 * @property {Date} updated_at
 */