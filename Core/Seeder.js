const MySQL = require("./MySQL")
const SeederLogger = require('../Database/SeederLogger')

module.exports = class Seeder{
    constructor() {

    }

    static async Seed({tableName, data}){
        SeederLogger.Log(`Started seeding ${tableName}`)
        let insertNames = []
        let insertValues = []
        Object.entries(data).map(entry => {
            insertNames.push(entry[0])
            insertValues.push(`'${entry[1]}'`)
        })
        await MySQL.Query(`INSERT INTO ${tableName} (${insertNames.join(', ')}) VALUES (${insertValues.join(', ')})`)
        SeederLogger.Log(`Successfully seeded ${tableName}`)
    }
}