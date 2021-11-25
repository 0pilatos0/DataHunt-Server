const Model = require("../../Core/Model");

module.exports = class Users_Role extends Model {
    static table = "users_roles";

    constructor(){
        super();
    }

    /**
     * @returns {Users_RoleObject}
     */
    static async Find({select, where, orderBy, joins} = {}){
        return super.Find({select, where, orderBy, joins});
    }

    /**
     * @returns {Users_RoleObject}
     */
    static async FindId({select, where, orderBy, joins} = {}){
        return super.FindId({select, where, orderBy, joins});
    }

    /**
     * @returns {Array.<Users_RoleObject>}
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
     * @returns {Array.<Users_RoleObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Users_RoleObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Users_RoleObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Users_RoleObject
 * @property {number} id
 * @property {number} user_id
 * @property {number} role_id
 * @property {Date} created_at
 * @property {Date} updated_at
 */