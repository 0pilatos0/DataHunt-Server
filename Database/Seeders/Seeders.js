const MySQL = require('../../Core/MySQL');
const Seeder = require('../../Core/Seeder');
const SeederLogger = require('./SeederLogger')

module.exports = class Seeders{
    constructor() {
        
    }

    static async Run() {
        SeederLogger.Start(`Started seeding ${process.env.DB}`)

        await MySQL.Query("USE datahunttest")

        await Seeder.Seed({
            tableName: 'users'
        })

        await Seeder.Seed({
            tableName: 'users_bans'
        })
        
        await Seeder.Seed({
            tableName: 'users_feed'
        })
        
        await Seeder.Seed({
            tableName: 'users_achievements'
        })
        
        await Seeder.Seed({
            tableName: 'stats'
        })
        
        await Seeder.Seed({
            tableName: 'roles'
        })

        await Seeder.Seed({
            tableName: 'users_roles'
        })
        
        await Seeder.Seed({
            tableName: 'logintokens'
        })
        
        await Seeder.Seed({
            tableName: 'level'
        })
        
        await Seeder.Seed({
            tableName: 'items_stats'
        })
        
        await Seeder.Seed({
            tableName: 'items'
        })
        
        await Seeder.Seed({
            tableName: 'friends'
        })
        
        await Seeder.Seed({
            tableName: 'inventory'
        })
        
        await Seeder.Seed({
            tableName: 'class'
        })
        
        await Seeder.Seed({
            tableName: 'characters'
        })
        
        await Seeder.Seed({
            tableName: 'achievements'
        })

        await Seeder.Seed({
            tableName: 'profile_pictures'
        })

        await Seeder.Seed({
            tableName: 'files'
        })

        SeederLogger.Log(`Finished seeding ${process.env.DB}`)
    }
}