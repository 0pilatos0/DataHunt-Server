const MySQL = require("../MySQL");

module.exports = class Table{
    create(name, columns){
        let columnString = "id INT AUTO_INCREMENT PRIMARY KEY, ";
        Object.keys(columns).map(key => {
            columns[key] = columns[key].replace(" U", " UNIQUE").replace("AI", "AUTO_INCREMENT").replace("PK", "PRIMARY KEY").replace("NN", "NOT NULL")
            columnString += `${key} ${columns[key]}, `
        });
        columnString += "created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ";
        columnString += "updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP";
        MySQL.Query(`CREATE TABLE IF NOT EXISTS ${name} (${columnString})`);
    }

    drop(name){
        MySQL.Query(`DROP TABLE IF EXISTS ${name}`);
    }
}