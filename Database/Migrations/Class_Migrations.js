const { Test } = require("../../Core/Migration");
const MySQL = require("../../Core/MySQL");
const Migration = require("../../Core/Migration")
module.exports = class Class_Seeder extends Migration{
    constructor() {
        super();
    }

   /**
 *
 * @param {String} data.tableName Description
 * @param {Array} data.defaults Description
 * @param {Object} data.values Description
 *
 */

    static async Run(data) {
        let checked = await this.Check(data.tableName)
        if (checked.length !== 0) {
            console.log("Dropping exising table")

            await this.Drop(data.tableName)
        }
        console.log("Creating table")

        await Migration.Test(data)

        console.log("Made \"class\" table \r\n");
    }

    static async Drop(tableName) {
        return await MySQL.Query(`DROP TABLE ${tableName}`)
    }

    // static async Create() {
    //     return await MySQL.Query("CREATE TABLE class ( id INT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, type VARCHAR(50) NOT NULL );")
    // }

    static async Check(tableName) {
        return await MySQL.Query(`SELECT * FROM information_schema.tables WHERE table_schema = 'datahunttest' AND table_name = '${tableName}' LIMIT 1;`)
    }
}
