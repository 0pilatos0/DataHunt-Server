const Model = require("../../Core/Model");

module.exports = class Achievement extends Model {
    static table = "achievements";

    constructor(){
        super();
    }

    /**
     * @returns {AchievementObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {AchievementObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<AchievementObject>}
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
     * @returns {Array.<AchievementObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {AchievementObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {AchievementObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} AchievementObject
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} achievement_type
 * @property {Date} created_at
 * @property {Date} updated_at
 */