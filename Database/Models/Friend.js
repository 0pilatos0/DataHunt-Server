const Model = require("../../Core/Model");

module.exports = class Friend extends Model {
    static table = "friends";

    constructor(){
        super();
    }

    /**
     * @returns {FriendObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {FriendObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<FriendObject>}
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
     * @returns {Array.<FriendObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {FriendObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {FriendObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} FriendObject
 * @property {number} id
 * @property {number} user_id
 * @property {number} sender_id
 * @property {number} receiver_id
 * @property {string} status
 * @property {Date} created_at
 * @property {Date} updated_at
 */