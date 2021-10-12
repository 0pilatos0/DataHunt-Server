const Seeders = require('./Database/Seeders/Seeders')
require('dotenv').config()

async function run(){
    await Seeders.Run()
    console.log("Successfully seeded!")
    process.exit()
}

run()