require('dotenv').config({
    path: '../.env'
})
const fs = require('fs')
const MySQL = require('../Core/MySQL')
const Logger = require('./Logger')

CreateSeeders()

async function CreateSeeders(){
    Logger.Start("Started creating seeders")
    fs.rmSync('./Seeders/', {recursive: true, force: true})
    fs.mkdirSync('./Seeders')
    await MySQL.Query(`USE ${process.env.DB}`)
    let tables = await MySQL.Query(`SELECT table_name AS name FROM information_schema.tables WHERE table_schema = '${process.env.DB}'`)
    let doneTables = 0
    tables.map(async table => {
        const fileName = `${firstCharToUpper(table.name)}Seeder.js`
        Logger.Log(`Started creating seeder ${fileName}`)
        const path = `./Seeders/${fileName}`
        fs.writeFileSync(path, `const Seeder = require('../../Core/Seeder')\r\n\r\nmodule.exports = class ${firstCharToUpper(table.name)}Seeder extends Seeder {\r\n\tconstructor(){\r\n\t\tsuper()\r\n\t}`)
        let commentString = `/**\r\n\t *\r\n\t * @param {Object} data to seed table ${table.name}\r\n\t`
        let codeString = `\t`
        let columns = await MySQL.Query(`SELECT column_name AS name, data_type AS type, character_maximum_length AS length, column_default AS defaultValue, is_nullable AS nullable, table_name AS tableName, extra AS extra FROM information_schema.columns WHERE table_schema = '${process.env.DB}' AND table_name = '${table.name}' ORDER BY table_name, ordinal_position`)
        columns.map(column => {
            if(column.name == 'id' || column.name == 'created_at' || column.name == 'updated_at') return //this to skip default values, so they can't be filled
            let randomCode = `data.${column.name} = `
            switch (column.type) {
                case 'int':
                    column.type = 'number'
                    randomCode += `Math.round(Math.random() * 255)`
                    break;
                case 'tinyint':
                    column.type = 'boolean'
                    randomCode += `Math.round(Math.random())`
                    break;
                case 'varchar':
                    column.type = 'string'
                    randomCode += "''\r\n\t\t\t"
                    randomCode += "const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(\"\")\r\n\t\t\t"
                    randomCode += `for (let i = 0; i < ${Math.min(column.length, 25)}; i++) {\r\n\t\t\t\t`
                    randomCode += `data.${column.name} += chars[Math.round(Math.random() * chars.length)]\r\n\t\t\t`
                    randomCode += "}"
                    break;
                case 'longblob':
                case 'longtext':
                    column.type = 'string'
                    randomCode += "''\r\n\t\t\t"
                    randomCode += "const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(\"\")\r\n\t\t\t"
                    randomCode += `for (let i = 0; i < ${Math.min(column.length, 1024)}; i++) {\r\n\t\t\t\t`
                    randomCode += `data.${column.name} += chars[Math.round(Math.random() * chars.length)]\r\n\t\t\t`
                    randomCode += "}"
                    break;
                case 'timestamp':
                case 'datetime':
                    column.type = 'Date'
                    randomCode += "new Date(`${new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toISOString().slice(0, 19).replace('T', ' ')}`)"
                    break;
                default:
                    break;
            }
            commentString += ` * @param {${column.type}} data.${column.name} ${firstCharToUpper(column.name)}\r\n\t`
            codeString += `if(typeof data.${column.name} != 'undefined'){\r\n\t\t\t`
            codeString += `if(typeof data.${column.name} !== '${column.type}'){\r\n\t\t\t\t`
            codeString += `throw new Error('${column.name} must be typeof ${column.type}')\r\n\t\t\t`
            codeString += `}\r\n\t\t`
            codeString += `}\r\n\t\t`
            if(column.extra.indexOf('auto_increment') == -1 && column.extra.indexOf('DEFAULT_GENERATED') == -1 && column.defaultValue == null){
                codeString += `else {\r\n\t\t`
                codeString += `\t${randomCode}\r\n\t\t`
                codeString += `}\r\n\t\t`
            }
        })
        commentString += ` */`
        fs.appendFileSync(path, `\r\n\r\n\t${commentString}\r\n\tstatic async Seed(data){\r\n\t`)
        fs.appendFileSync(path, codeString)
        fs.appendFileSync(path, `await super.Seed({tableName:"${table.name}", data})`)
        fs.appendFileSync(path, `\r\n\t}`)
        fs.appendFileSync(path, `\r\n}`)
        Logger.Log(`Finished creating seeder ${fileName}`)
        doneTables++
        if(doneTables == tables.length){
            Logger.Log("Finished creating seeders")
            console.log("Successfully created seeders!")
            process.exit()
        }
    })
}

function firstCharToUpper(string){
    return string[0].toUpperCase() + string.slice(1)
}