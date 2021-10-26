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
            tableName: 'roles',
            customData: [
                {
                    'name': 'admin'
                }
            ]
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
            tableName: 'items',
            customData: [
                {
                    'name': 'Wooden Sword',
                    'required_level': 1,
                    'type': 'sword',
                    'rarity': 1,
                    'min_value': 1,
                    'max_value': 1,
                    'texture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAIVBMVEUAAAAgGAooHgs3KRBHNhRJNhVZQxloTh51WCGGZSaJZyeZJO70AAAAAXRSTlMAQObYZgAAAKpJREFUeF7t1UENw0AMRNFSWAqlYApLoRRCIRRCoRSKshofdtTIkSq1N/9/97uNfPu5+AwQELC0DvVUQwECAl5bqQICAv7ZAgRkJICAjISRAALGqrI2VVkdQUDAqUJVVqq2OoKAgBZ8l8KhSgsQEDCb6mQBAgKW7+psAQICPtSukonMKiAgYFovdVfpj5XVjiAgYKx2ZcuZ7g0CAk717VA7goCAwwFeBQj4BrVdlE9ZMX1KAAAAAElFTkSuQmCC'
                }, {
                    'name': 'Bandana',
                    'required_level': 1,
                    'type': 'helmet',
                    'rarity': 1,
                    'min_value': 1,
                    'max_value': 1,
                    'texture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAIVBMVEUAAAAgGAooHgs3KRBHNhRJNhVZQxloTh51WCGGZSaJZyeZJO70AAAAAXRSTlMAQObYZgAAAKpJREFUeF7t1UENw0AMRNFSWAqlYApLoRRCIRRCoRSKshofdtTIkSq1N/9/97uNfPu5+AwQELC0DvVUQwECAl5bqQICAv7ZAgRkJICAjISRAALGqrI2VVkdQUDAqUJVVqq2OoKAgBZ8l8KhSgsQEDCb6mQBAgKW7+psAQICPtSukonMKiAgYFovdVfpj5XVjiAgYKx2ZcuZ7g0CAk717VA7goCAwwFeBQj4BrVdlE9ZMX1KAAAAAElFTkSuQmCC'
                }, {
                    'name': 'Pizza Slices',
                    'required_level': 1,
                    'type': 'chestplate',
                    'rarity': 1,
                    'min_value': 1,
                    'max_value': 1,
                    'texture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAIVBMVEUAAAAgGAooHgs3KRBHNhRJNhVZQxloTh51WCGGZSaJZyeZJO70AAAAAXRSTlMAQObYZgAAAKpJREFUeF7t1UENw0AMRNFSWAqlYApLoRRCIRRCoRSKshofdtTIkSq1N/9/97uNfPu5+AwQELC0DvVUQwECAl5bqQICAv7ZAgRkJICAjISRAALGqrI2VVkdQUDAqUJVVqq2OoKAgBZ8l8KhSgsQEDCb6mQBAgKW7+psAQICPtSukonMKiAgYFovdVfpj5XVjiAgYKx2ZcuZ7g0CAk717VA7goCAwwFeBQj4BrVdlE9ZMX1KAAAAAElFTkSuQmCC'
                }, {
                    'name': 'Shorts',
                    'required_level': 1,
                    'type': 'leggings',
                    'rarity': 1,
                    'min_value': 1,
                    'max_value': 1,
                    'texture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAIVBMVEUAAAAgGAooHgs3KRBHNhRJNhVZQxloTh51WCGGZSaJZyeZJO70AAAAAXRSTlMAQObYZgAAAKpJREFUeF7t1UENw0AMRNFSWAqlYApLoRRCIRRCoRSKshofdtTIkSq1N/9/97uNfPu5+AwQELC0DvVUQwECAl5bqQICAv7ZAgRkJICAjISRAALGqrI2VVkdQUDAqUJVVqq2OoKAgBZ8l8KhSgsQEDCb6mQBAgKW7+psAQICPtSukonMKiAgYFovdVfpj5XVjiAgYKx2ZcuZ7g0CAk717VA7goCAwwFeBQj4BrVdlE9ZMX1KAAAAAElFTkSuQmCC'
                }, {
                    'name': 'Flip Flops',
                    'required_level': 1,
                    'type': 'boots',
                    'rarity': 1,
                    'min_value': 1,
                    'max_value': 1,
                    'texture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAIVBMVEUAAAAgGAooHgs3KRBHNhRJNhVZQxloTh51WCGGZSaJZyeZJO70AAAAAXRSTlMAQObYZgAAAKpJREFUeF7t1UENw0AMRNFSWAqlYApLoRRCIRRCoRSKshofdtTIkSq1N/9/97uNfPu5+AwQELC0DvVUQwECAl5bqQICAv7ZAgRkJICAjISRAALGqrI2VVkdQUDAqUJVVqq2OoKAgBZ8l8KhSgsQEDCb6mQBAgKW7+psAQICPtSukonMKiAgYFovdVfpj5XVjiAgYKx2ZcuZ7g0CAk717VA7goCAwwFeBQj4BrVdlE9ZMX1KAAAAAElFTkSuQmCC'
                }, 
            ]
        })
        
        await Seeder.Seed({
            tableName: 'friends'
        })
        
        await Seeder.Seed({
            tableName: 'inventory',
            customData: [
                {
                    'character_id': 2,
                    'json': {
                        "weapons": [
                            {
                                name: "Wooden Sword",
                                value: 1,
                                rarity: 1
                            }
                        ],
                        "helmet": [
                            {
                                name: "Bandana",
                                value: 1,
                                rarity: 1
                            }
                        ],
                        "chestpiece": [
                            {
                                name: "Pizza Slices",
                                value: 1,
                                rarity: 1
                            }
                        ],
                        "leggings": [
                            {
                                name: "Shorts",
                                value: 1,
                                rarity: 1
                            }
                        ],
                        "boots": [
                            {
                                name: "Flip Flops",
                                value: 1,
                                rarity: 1
                            }
                        ]
                    }
                }
            ]
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