const Model = require("../../Core/Model");

module.exports = class Character extends Model {
    static table = "characters";

    constructor(){
        super();
    }

    /**
     * @returns {CharacterObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {CharacterObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<CharacterObject>}
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
     * @returns {Array.<CharacterObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {CharacterObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {CharacterObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} CharacterObject
 * @property {number} id
 * @property {string} name
 * @property {number} user_id
 * @property {number} class_id
 * @property {number} stats_id
 * @property {number} kills
 * @property {string} deaths
 * @property {number} level
 * @property {Date} created_at
 * @property {Date} updated_at
 */