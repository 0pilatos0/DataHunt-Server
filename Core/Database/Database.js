const MySQL = require("../MySQL")

module.exports = class Database{
    static async create(name){
        await MySQL.Query(`DROP DATABASE IF EXISTS ${name}`)
        await MySQL.Query(`CREATE DATABASE IF NOT EXISTS ${name}`) // IF NOT EXISTS ${name}
        await MySQL.Query(`USE ${name}`)
    }
}