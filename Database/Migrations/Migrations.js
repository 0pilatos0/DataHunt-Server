const Class_Migrations = require('./Class_Migrations');

module.exports = class Class_Seeder {
    constructor() {
    }

    static async Run() {
        Class_Migrations.Run(
            {
                tableName: 'testTable',
                defaults: ['name'],
                values: {'username': ["varchar(255)", "NOT null"], 'description': ["varchar(255)", "NOT NULL"]}
            }
        )
        console.log("\r\n Finished migrations")
    }
}