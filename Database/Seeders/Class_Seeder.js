const Model = require('../../Core/Model');

module.exports = class Class_Seeder extends Model{
    static table = "class";
    constructor() {
        super();
    }

    static async TestFuntion(id) {
        return this.All()
    }

    static async SeedClass(name, type, skill_limit, skill) {
        return this.Create({
            create: {
                'name': name,
                'type': type,
                'skill_limit': skill_limit,
                'skill': skill
            }
        })
    }
}