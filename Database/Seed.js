require('dotenv').config({
    path: '../.env'
})
const Logger = require('./Logger')

async function run(){
    Logger.Start('Started seeding')
    //Run seeders here
    console.log("Successfully seeded!")
    process.exit()
}

run()