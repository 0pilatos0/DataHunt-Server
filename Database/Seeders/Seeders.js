const Model = require('../../Core/Model');
const MySQL = require('../../Core/MySQL');
const Seeder = require('../../Core/Seeder');

module.exports = class Seeders extends Model{
    static table = "class";
    constructor() {
        super();
    }

    static async Run() {
        await MySQL.Query("USE datahunttest")
        Seeder.Seed({
            tableName: 'inventory'
        })
        //return this.All()
    }

    static async SeedClass(name, type, skill_limit, skill) {
        return this.Create({
            create: {
                name,
                type,
                skill_limit,
                skill
            }
        })
    }
}