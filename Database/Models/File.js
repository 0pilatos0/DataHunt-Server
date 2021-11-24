const Model = require("../../Core/Model");

module.exports = class File extends Model {
    static table = "files";

    constructor(){
        super();
    }

    /**
     * @returns {FileObject}
     */
    static async Find({select = [], where = {}, orderBy}){
        return super.Find({select, where, orderBy});
    }

    /**
     * @returns {FileObject}
     */
    static async FindId({select = [], where = {}, orderBy}){
        return super.FindId({select, where, orderBy});
    }

    /**
     * @returns {Array.<FileObject>}
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
     * @returns {Array.<FileObject>}
     */
    static async All(){
        return super.All();
    }

    /**
     * @returns {FileObject}
     */
    static async First({}){
        return super.First({});
    }

    /**
     * @returns {FileObject}
     */
    static async Last({}){
        return super.Last({});
    }
}

/**
 * @typedef {Object} FileObject
 * @property {number} id
 * @property {string} name
 * @property {string} file
 * @property {Date} created_at
 * @property {Date} updated_at
 */