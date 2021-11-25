const Model = require("../../Core/Model");

module.exports = class Characters_Achievement extends Model {
    static table = "characters_achievements";

    constructor(){
        super();
    }

    /**
     * @returns {Characters_AchievementObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {Characters_AchievementObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<Characters_AchievementObject>}
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
     * @returns {Array.<Characters_AchievementObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Characters_AchievementObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Characters_AchievementObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Characters_AchievementObject
 * @property {number} id
 * @property {number} character_id
 * @property {number} achievement_id
 * @property {number} progress_value
 * @property {number} required_value
 * @property {Date} created_at
 * @property {Date} updated_at
 */