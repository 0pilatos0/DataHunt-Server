require('dotenv').config({path: '../.env'});
const MySQL = require("../Core/MySQL");
const fs = require('fs');
const pluralize = require('pluralize');
const Utils = require("../Core/Utils");

run()

async function run(){
    // MySQL.connect(process.env.DB);
    let tables = await MySQL.Query(`SHOW TABLES`);
    tables.map(async table => {
        table = table[`Tables_in_${process.env.DB}`];
        let tableName = Utils.firstCharToUpperPerWord(table);
        let customObject = `/**\r\n`;
        let customObjectName = `${pluralize.singular(tableName)}Object`
        customObject += ` * @typedef {Object} ${pluralize.singular(tableName)}Object\r\n`;
        let columns = await MySQL.Query(`SHOW COLUMNS FROM ${table}`);
        columns.map(column => {
            let parsedType = "";
            if(column.Type.includes("int")){
                parsedType = "number";
            }
            if(column.Type.includes("varchar") || column.Type.includes("text") || column.Type.includes("blob")){
                parsedType = "string";
            }
            if(column.Type.includes("datetime") || column.Type.includes("timestamp")){
                parsedType = "Date";
            }
            customObject += ` * @property {${parsedType}} ${column.Field}\r\n`;
        });
        customObject += ` */`;
        fs.writeFileSync(`./Models/${pluralize.singular(tableName)}.js`, fs.readFileSync('./Templates/ModelTemplate.txt', 'utf-8').replace(/{{table}}/g, table).replace(/{{model}}/g, pluralize.singular(tableName)).replace(/{{customObject}}/g, customObject).replace(/{{customObjectName}}/g, customObjectName));
    });
}

