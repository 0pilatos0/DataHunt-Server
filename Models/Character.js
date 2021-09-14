const Model = require('../Core/Model');

module.exports = class Character extends Model{
    static table = "characters";
    constructor() {
        super();
    }

    static async TestFuntion(id) {
        return this.Select({
            where: {
                'id': id
            }
        })
    }

    static async TestInsert(uid, clid, username) {
        return this.Create({
            create: {
                'user_id': uid,
                'class_id': clid,
                'name': username,
                'kills': 0,
                'deaths': 0
            }
        })
    }
}