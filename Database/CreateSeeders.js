const MySQL = require("../Core/MySQL");
const fs = require('fs');
const pluralize = require('pluralize');
const { firstCharToUpperPerWord } = require("../Core/Utils");

run()

async function run(){
    let tables = await MySQL.Query(`SHOW TABLES`);
    tables.map(async table => {
        table = table[`Tables_in_${process.env.DB}`];
        let tableName = firstCharToUpperPerWord(table);
        let comment = ` * @param {Object} data to seed table ${tableName}\r\n\t`;
        let logic = "";
        let columns = await MySQL.Query(`SHOW COLUMNS FROM ${table}`);
        columns.map(column => {
            if(column.Extra == "auto_increment" || column.Extra.includes("DEFAULT_GENERATED") || column.Default == "current_timestamp()") return;
            let parsedType = "";
            if(column.Type.includes("int")){
                parsedType = "number";
            }
            if(column.Type.includes("varchar") || column.Type.includes("text") || column.Type.includes("blob")){
                parsedType = "string";
            }
            comment += ` * @param {${parsedType}} data.${column.Field} ${firstCharToUpperPerWord(column.Field)}\r\n\t`;
            logic += `if(typeof data.${column.Field} != "undefined"){\r\n\t\t\t`;
            logic += `if(typeof data.${column.Field} !== "${parsedType}"){\r\n\t\t\t\t`;
            logic += `throw new Error('${column.Field} must be typeof ${parsedType}');\r\n\t\t\t`;
            logic += `}\r\n\t\t`;
            if(column.Default == null){
                logic += `}\r\n\t\t`;
                logic += `else {\r\n\t\t\t`;
                switch (parsedType) {
                    case "string":
                        logic += `data.${column.Field} = "";\r\n\t\t\t`;
                        logic += `const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("");\r\n\t\t\t`;
                        logic += `for (let i = 0; i < 25; i++) {\r\n\t\t\t\t`;
                        logic += `data.${column.Field} += chars[Math.round(Math.random() * chars.length)];\r\n\t\t\t`;
                        logic += `}\r\n\t\t` 
                        break;
                    case "number":
                        logic += `data.${column.Field} = Math.round(Math.random() * 255);\r\n\t\t`;
                        break;
                    case "boolean":
                        logic += `data.${column.Field} = Math.round(Math.random());\r\n\t\t`;
                        break;
                    default:
                        break;
                }
            }
            logic += `}\r\n\t\t`
        });
        comment = comment.substr(0, comment.lastIndexOf("\r\n\t"));
        logic = logic.substr(0, logic.lastIndexOf("\r\n\t\t"));
        fs.writeFileSync(`./Seeders/${tableName}.js`, fs.readFileSync('Templates/SeederTemplate.txt', 'utf-8').replace(/{{seeder}}/g, tableName).replace(/{{logic}}/g, logic).replace(/{{comment}}/g, comment).replace(/{{table}}/g, table));
    });
}