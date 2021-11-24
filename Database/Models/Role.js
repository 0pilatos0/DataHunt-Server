const Model = require("../../Core/Model");

module.exports = class Role extends Model {
    static table = "roles";

    constructor(){
        super();
    }

    /**
     * @returns {RoleObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {RoleObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<RoleObject>}
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
     * @returns {Array.<RoleObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {RoleObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {RoleObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} RoleObject
 * @property {number} id
 * @property {string} name
 * @property {Date} created_at
 * @property {Date} updated_at
 */