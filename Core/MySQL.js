const mysql = require('mysql')
require('dotenv').config({path:'../.env'})

let con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS
})

module.exports = class MySQL{
    constructor(database = process.env.DB) {
        if(database != null){
            con.config.database = database;
        }
        con.connect(err => {
            if (err) throw err
            // console.log("Connected")
        })
    }

    static async use(database){
        await MySQL.Query(`USE ${database}`)
    }

    static async Query(query, values){
        return new Promise((resolve, reject) => {
            con.query(query, values, (err, result) => {
                if (err) throw err
                return resolve(result)
            })
        });
    }
}