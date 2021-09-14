const Class_Migrations = require('./Class_Migrations');

module.exports = class Class_Seeder {
    constructor() {
    }

    static async Run() {
        await Class_Migrations.Run()

        console.log("\r\n Finished migrations")
    }
}