const Model = require("../../Core/Model");

module.exports = class Users_Ban extends Model {
    static table = "users_bans";

    constructor(){
        super();
    }

    /**
     * @returns {Users_BanObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {Users_BanObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<Users_BanObject>}
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
     * @returns {Array.<Users_BanObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Users_BanObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Users_BanObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Users_BanObject
 * @property {number} id
 * @property {number} user_id
 * @property {number} banned_by
 * @property {Date} until
 * @property {Date} created_at
 * @property {Date} updated_at
 */