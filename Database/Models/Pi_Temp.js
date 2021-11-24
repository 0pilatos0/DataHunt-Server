const Model = require("../../Core/Model");

module.exports = class Pi_Temp extends Model {
    static table = "pi_temps";

    constructor(){
        super();
    }

    /**
     * @returns {Pi_TempObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {Pi_TempObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<Pi_TempObject>}
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
     * @returns {Array.<Pi_TempObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Pi_TempObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Pi_TempObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Pi_TempObject
 * @property {number} id
 * @property {string} temp
 * @property {Date} created_at
 * @property {Date} updated_at
 */