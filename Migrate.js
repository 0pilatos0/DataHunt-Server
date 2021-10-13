
const Migrations = require('./Database/Migrations/Migrations')
require('dotenv').config()


async function run(){
    await Migrations.Run()
    console.log("Successfully migrated!")
    process.exit()
}

run()  