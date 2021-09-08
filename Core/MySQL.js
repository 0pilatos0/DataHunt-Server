const mysql = require('mysql') 

module.exports =  class MySQL{
    static #con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "datahunt"
    })

    constructor() {
        MySQL.#con.connect(err => {
            if (err) throw err
            console.log("Connected")
        })
    }

    static async Query(query, values){
        return new Promise((resolve, reject) => {
            this.#con.query(query, values, (err, result) => {
                if (err) throw err
                return resolve(result)
            })
        });
    }
}