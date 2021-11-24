const Model = require("../../Core/Model");

module.exports = class Class extends Model {
    static table = "class";

    constructor(){
        super();
    }

    /**
     * @returns {ClassObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {ClassObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<ClassObject>}
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
     * @returns {Array.<ClassObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {ClassObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {ClassObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} ClassObject
 * @property {number} id
 * @property {number} attack
 * @property {number} health
 * @property {number} speed
 * @property {number} defense
 * @property {Date} created_at
 * @property {Date} updated_at
 */