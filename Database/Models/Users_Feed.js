const Model = require("../../Core/Model");

module.exports = class Users_Feed extends Model {
    static table = "users_feed";

    constructor(){
        super();
    }

    /**
     * @returns {Users_FeedObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {Users_FeedObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<Users_FeedObject>}
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
     * @returns {Array.<Users_FeedObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Users_FeedObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Users_FeedObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Users_FeedObject
 * @property {number} id
 * @property {number} user_id
 * @property {string} message
 * @property {Date} time
 * @property {Date} created_at
 * @property {Date} updated_at
 */