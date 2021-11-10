
const Migrations = require('./Migrations/Migrations')
require('dotenv').config({
    path: '../.env'
})


async function run(){
    await Migrations.Run()
    console.log("Successfully migrated!")
    process.exit()
}

run()  