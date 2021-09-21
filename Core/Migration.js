const MySQL = require("./MySQL")
module.exports = class Migration{
    constructor() {
        
    }

    static async Test({tableName, defaults, values}){
        let attr = {}
        defaults.forEach(e => {
            switch (e) {
                case "name":
                    attr['name'] = ["varchar(255)", "NOT NULL"]
                break;

                case "description":
                    console.log("description column made :)")
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
        // console.log(query)
        return result
        
    }
}