const MySQL = require("./MySQL")
module.exports = class Migration{
    constructor() {
        
    }

    static async CreateTable({tableName, defaults, values}){
        let checked = await this.CheckTable(tableName)
        if (checked.length !== 0) {
            console.log(`Dropping table ${tableName}`)

            await this.DropTable(tableName)
        }
        console.log(`Creating table ${tableName}`)

        let attr = {}
        defaults.forEach(e => {
            switch (e) {
                case "name":
                    attr['name'] = ["varchar(255)", "NOT NULL"]
                break;

                case "description":
                    attr['description'] = ["longtext", "NOT null"]
                break;

                case "username":
                    attr['username'] = ["varchar(255)", "NOT null"]
                break;

                default:
                    console.log(e + " is not in our wrapper")    
                break;
            }
        })

        Object.entries(values).forEach(e => {
            attr[e[0]] = e[1]
        })

        let query = `CREATE TABLE ${tableName} (`
        let columns = ['id INT PRIMARY KEY AUTO_INCREMENT']
        Object.entries(attr).forEach(e => {
            e[1].forEach(columnType => {
                let index = e[1].indexOf(columnType)
                e[1][index] = e[1][index].toUpperCase()
                switch (e[1][index]) {
                    case "PK":
                        e[1][index] = "PRIMARY KEY"
                        break;

                    case "AI":
                        e[1][index] = "AUTO_INCREMENT"
                        break;
                
                    case "NN":
                        e[1][index] = "NOT NULL"
                        break;
                        
                    default:
                        break;
                }
            })
            columns.push(`${e[0]} ${e[1].join(" ")}`)
        })

        columns.push("created_at DATETIME DEFAULT CURRENT_TIMESTAMP")
        columns.push("updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")

        query += columns.join(", ")
        query += ");"

        let result = MySQL.Query(query)

        console.log(`Made table ${tableName} \r\n`)

        return result
    }

    static async DropTable(tableName) {
        return await MySQL.Query(`DROP TABLE ${tableName}`)
    }

    static async CheckTable(tableName) {
        return await MySQL.Query(`SELECT * FROM information_schema.tables WHERE table_schema = '${process.env.DB}' AND table_name = '${tableName}' LIMIT 1;`)
    }

    static async CreateDatabase(databaseName){
        let checked = await this.CheckDatabase(databaseName)
        if (checked.length !== 0) {
            console.log(`Dropping database ${databaseName}`)
            await this.DropDatabase(databaseName)
        }
        await MySQL.Query(`CREATE DATABASE ${databaseName}`)
        let query = MySQL.Query(`USE ${databaseName}`)
        
        console.log(`Made database ${databaseName} \r\n`)

        return query
    }

    static async CheckDatabase(databaseName){
        return await MySQL.Query(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}'`)
    }

    static async DropDatabase(databaseName){
        return await MySQL.Query(`DROP DATABASE ${databaseName}`)
    }
}