const Model = require("../../Core/Model");

module.exports = class Logintoken extends Model {
    static table = "logintokens";

    constructor(){
        super();
    }

    /**
     * @returns {LogintokenObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {LogintokenObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<LogintokenObject>}
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
     * @returns {Array.<LogintokenObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {LogintokenObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {LogintokenObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} LogintokenObject
 * @property {number} id
 * @property {number} user_id
 * @property {string} token
 * @property {Date} created_at
 * @property {Date} updated_at
 */