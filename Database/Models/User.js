const Model = require("../../Core/Model");

module.exports = class User extends Model {
    static table = "users";

    constructor(){
        super();
    }

    /**
     * @returns {UserObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {UserObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<UserObject>}
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
     * @returns {Array.<UserObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {UserObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {UserObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} UserObject
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} password
 * @property {number} enabled
 * @property {string} resetpassword
 * @property {string} verifytoken
 * @property {number} verified
 * @property {string} resettoken
 * @property {Date} created_at
 * @property {Date} updated_at
 */