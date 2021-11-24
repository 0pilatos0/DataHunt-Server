const Model = require("../../Core/Model");

module.exports = class Item extends Model {
    static table = "items";

    constructor(){
        super();
    }

    /**
     * @returns {ItemObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {ItemObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<ItemObject>}
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
     * @returns {Array.<ItemObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {ItemObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {ItemObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} ItemObject
 * @property {number} id
 * @property {number} required_level
 * @property {number} min_value
 * @property {number} max_value
 * @property {Date} created_at
 * @property {Date} updated_at
 */