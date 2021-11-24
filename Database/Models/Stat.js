const Model = require("../../Core/Model");

module.exports = class Stat extends Model {
    static table = "stats";

    constructor(){
        super();
    }

    /**
     * @returns {StatObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {StatObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<StatObject>}
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
     * @returns {Array.<StatObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {StatObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {StatObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} StatObject
 * @property {number} id
 * @property {number} user_id
 * @property {number} money
 * @property {number} exp
 * @property {number} level
 * @property {number} health
 * @property {number} attack
 * @property {number} speed
 * @property {number} defense
 * @property {Date} created_at
 * @property {Date} updated_at
 */