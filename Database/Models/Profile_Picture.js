const Model = require("../../Core/Model");

module.exports = class Profile_Picture extends Model {
    static table = "profile_pictures";

    constructor(){
        super();
    }

    /**
     * @returns {Profile_PictureObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {Profile_PictureObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<Profile_PictureObject>}
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
     * @returns {Array.<Profile_PictureObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {Profile_PictureObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {Profile_PictureObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} Profile_PictureObject
 * @property {number} id
 * @property {number} user_id
 * @property {string} image
 * @property {Date} created_at
 * @property {Date} updated_at
 */