const mysql = require('mysql')
require('dotenv').config()

module.exports = class MySQL{
    static #con = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB
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