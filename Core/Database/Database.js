const MySQL = require("../MySQL")

module.exports = class Database{
    static create(name){
        MySQL.Query(`DROP DATABASE IF EXISTS ${name}`)
        MySQL.Query(`CREATE DATABASE IF NOT EXISTS ${name}`) // IF NOT EXISTS ${name}
        MySQL.Query(`USE ${name}`)
    }
}