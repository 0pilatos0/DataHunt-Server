const MySQL = require("./MySQL")
const SeederLogger = require('../Database/Seeders/SeederLogger')

module.exports = class Seeder{
    constructor() {

    }

    static async Seed({tableName, amount = 1}){
        SeederLogger.Log(`Started seeding ${tableName}`)
        for (let i = 0; i < amount; i++) {
            let data = await MySQL.Query(`SHOW COLUMNS FROM ${tableName}`)
            const digitRegex = /\d+/g
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
            let parsedColumns = []
            data.map(column => {
                if(column.Default == null && column.Null == "NO" && !column.Extra.includes("auto_increment")){
                    //console.log(column)
                    
                    // console.log(column.Field)
                    // console.log(column.Type)
                    // console.log(column.Default)
                    
                    switch (column.Type) {
                        case "timestamp":
                        case "datetime":
                            //Generate random datetime
                            let date = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toISOString().slice(0, 19).replace('T', ' ')
                            parsedColumns.push({
                                field: column.Field,
                                value: date
                            })
                            break;
                        case "boolean":
                            let int = Math.round(Math.random())
                            parsedColumns.push({
                                field: column.Field,
                                value: int
                            })
                            break;
                        default:
                            break;
                    }
                    if(column.Type.includes("tinyint")){
                        let int = Math.round(Math.random())
                        parsedColumns.push({
                            field: column.Field,
                            value: int
                        })
                    }
                    else if(column.Type.includes("int")){
                        //Generate random int between 1 and maxLength
                        let int = ""
                        for (let i = 0; i < 4; i++) {
                            int += Math.round(Math.random() * 9)
                        }
                        parsedColumns.push({
                            field: column.Field,
                            value: int
                        })
                    }
                    if(column.Type.includes("varchar")){
                        //Generate random string between 1 and maxLength
                        let string = ""
                        if(column.Type.match(digitRegex)){
                            let maxLength = column.Type.match(digitRegex)[0]
                            for (let i = 0; i < maxLength; i++) {
                                string += chars[Math.floor(Math.random() * chars.length)]
                            }
                        }
                        else{
                            string += chars[Math.floor(Math.random() * chars.length)]
                        }
                        parsedColumns.push({
                            field: column.Field,
                            value: string
                        })
                    }
                    if(column.Type.includes("text") || column.Type.includes("blob")){
                        //Generate random text
                        let string = ""
                        for (let i = 0; i < 1024; i++) {
                            string += chars[Math.floor(Math.random() * chars.length)]
                        }
                        parsedColumns.push({
                            field: column.Field,
                            value: string
                        })
                    }
                }
            })
            let insertNames = []
            let insertValues = []
            parsedColumns.map(column => {
                insertNames.push(column.field)
                insertValues.push(`'${column.value}'`)
            })
            await MySQL.Query(`INSERT INTO ${tableName} (${insertNames.join(', ')}) VALUES (${insertValues.join(', ')})`)
        }
        SeederLogger.Log(`Successfully seeded ${tableName} with ${amount} rows`)
    }
}