const Server = require('./Core/Server')
const Class_Seeder = require('./Database/Seeders/Class_Seeder')
const Migrations = require('./Database/Migrations/Migrations')

//new Server()

async function test() {
    //console.log(await Class_Seeder.SeedClass('wizard', 'magic', 4, 'Fire Bolt'))
    //console.log(await Class_Seeder.SeedClass('knight', 'physical', 4, 'Sharpen Blade'))
    // let data = await Class_Seeder.TestFuntion()
    // console.log(data)

    Migrations.Run()
}
test();