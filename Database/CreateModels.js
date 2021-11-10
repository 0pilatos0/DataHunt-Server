require('dotenv').config({
    path: '../.env'
})
const fs = require('fs')
const MySQL = require('../Core/MySQL')
const Logger = require('./Logger')

CreateModels()

async function CreateModels(){
    Logger.Start("Started creating models")
    fs.rmSync('./Models/', {recursive: true, force: true})
    fs.mkdirSync('./Models')
    await MySQL.Query(`USE ${process.env.DB}`)
    let tables = await MySQL.Query(`SELECT table_name AS name FROM information_schema.tables WHERE table_schema = '${process.env.DB}'`)
    let doneTables = 0
    tables.map(async table => {
        const fileName = `${firstCharToUpper(table.name)}Model.js`
        Logger.Log(`Started creating model ${fileName}`)
        const path = `./Models/${fileName}`
        fs.writeFileSync(path, `const Model = require('../../Core/Model')\r\n\r\nmodule.exports = class ${firstCharToUpper(table.name)}Model extends Model {\r\n\tstatic table = '${table.name}'\r\n\tconstructor(){\r\n\t\tsuper()\r\n\t}\r\n}`)
        Logger.Log(`Finished creating model ${fileName}`)
        doneTables++
        if(doneTables == tables.length){
            Logger.Log("Finished creating models")
            console.log("Successfully created models!")
            process.exit()
        }
    })
}

function firstCharToUpper(string){
    return string[0].toUpperCase() + string.slice(1)
}