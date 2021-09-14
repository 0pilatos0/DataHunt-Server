const MySQL = require("../../Core/MySQL");

module.exports = class Class_Seeder {
    constructor() {
    }

    static async Run() {
        let checked = await this.Check()
        if (checked.length !== 0) {
            console.log("Dropping exising table")

            await this.Drop()
        }
        console.log("Creating table")

        await this.Create()

        console.log("Made \"class\" table \r\n");
    }

    static async Drop() {
        return await MySQL.Query("DROP TABLE class")
    }

    static async Create() {
        return await MySQL.Query("CREATE TABLE class ( id INT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, type VARCHAR(50) NOT NULL );")
    }

    static async Check() {
        return await MySQL.Query("SELECT * FROM information_schema.tables WHERE table_schema = 'datahunttest' AND table_name = 'class' LIMIT 1;")
    }
}
