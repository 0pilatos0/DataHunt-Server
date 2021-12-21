const Model = require("../../Core/Model");

module.exports = class Items_Stat extends Model {
    static table = "items_stats";

    constructor(){
        super();
    }

    /**
     * @returns {Items_StatObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {Items_StatObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<Items_StatObject>}
     */
    static async Select({select, where, orderBy, limit, joins} = {}){
        return super.Select({select, where, orderBy, limit, joins});
    }

    /**
     * @returns {Boolean}
     */
    static async Create({create} = {}){
        return super.Create({create});
    }

    /**
     * @returns {Boolean}
     */
    static async Update({where, set} = {}){
        return super.Update({where, set});
    }

    /**
     * @returns {Boolean}
     */
    static async Delete({where} = {}){
        return super.Delete({where});
    }

    /**
     * @returns {Array.<Items_StatObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Items_StatObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Items_StatObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Items_StatObject
 * @property {number} id
 * @property {number} required_level
 * @property {number} min_value
 * @property {number} max_value
 * @property {Date} created_at
 * @property {Date} updated_at
 */