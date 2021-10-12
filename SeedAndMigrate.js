const Migrations = require('./Database/Migrations/Migrations')
const Seeders = require('./Database/Seeders/Seeders')
require('dotenv').config()

async function run(){
    await Migrations.Run()
    await Seeders.Run()
    console.log("Successfully seeded and migrated!")
    process.exit()
}

run()  