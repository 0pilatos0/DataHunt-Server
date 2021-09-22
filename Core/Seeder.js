const MySQL = require("./MySQL")

module.exports = class Seeder{
    constructor() {

    }

    static async Seed({tableName}){
        let data = await MySQL.Query(`SHOW COLUMNS FROM ${tableName}`)
        let columns = []
        data.map(column => {
            if(column.Default == null && column.Null == "NO" && !column.Extra.includes("auto_increment")){
                console.log(column)
                // console.log(column.Field)
                // console.log(column.Type)
                // console.log(column.Default)
                switch (column.Type) {
                    case "datetime" || "timestamp":
                        //Generate random datetime
                        break;
                    default:
                        break;
                }
                if(column.Type.includes("varchar")){
                    //Generate random string to seed
                }
                if(column.Type.includes("int")){
                    //Generate random int
                    let maxLength = column.Type.match(/\d+/g)[0]
                    console.log(maxLength)
                }
                if(column.Type.includes("longtext")){
                    //Generate random text
                }
            }
        })
        //console.log(data)
        //console.log(columns)
    }
}