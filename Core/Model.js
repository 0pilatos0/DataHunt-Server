const MySQL = require("./MySQL")

module.exports = class Model{
    static table
    constructor() {
        
    }

    static async Select({select, where, limit, joins} = {}){
        let values = []
        if(where){
            let whereData = this.ParseWhereObject(where)
            where = whereData.where
            values = values.concat(whereData.values)
        }
        return MySQL.Query(`SELECT ${select || '*'} FROM ${this.table} ${joins ? joins.join(' ') : ''}${where ? ` WHERE ${where}` : ''}${limit ? ` LIMIT ${limit}` : ''}`, values)
    }

    static async Delete({where}){
        let values = []
        if(where){
            let whereData = this.ParseWhereObject(where)
            where = whereData.where
            values = values.concat(whereData.values)
        }
        return MySQL.Query(`DELETE FROM ${this.table}${where ? ` WHERE ${where}` : ''}`, values)
    }

    static async Update({set, where}){
        let values = []
        let setData = this.ParseSetObject(set)
        set = setData.set
        values = values.concat(setData.values)
        let whereData = this.ParseWhereObject(where)
        where = whereData.where
        values = values.concat(whereData.values)
        return MySQL.Query(`UPDATE ${this.table} SET ${set}${where ? ` WHERE ${where}` : ''}`, values)
    }

    static async Create({create}){
        let values = []
        let createData = this.ParseCreateObject(create)
        values = values.concat(createData.values)
        return MySQL.Query(`INSERT INTO ${this.table} ${createData.create}`, values)
    }

    static async All(){
        return await this.Select()
    }

    static async First({where}){
        let first = await this.Select({
            limit: 1,
            where
        })
        if(first.length != undefined) return first[0]
        else return false
    }

    static async Last({where}){
        let last = await this.Select({
            limit: 1,
            where
        })
        if(last.length != undefined) return last[0]
        else return false
    }

    static async Find({where, joins, select}){
        let data = await this.Select({
            where, 
            joins,
            select
        })
        if(data.length > 0) return data[0]
        else return false
    }

    static async FindId({where, joins}){
        let data = await this.Select({
            where,
            joins,
            select: [`${this.table}.id`]
        })
        if(data.length > 0) return data[0].id
        else return false
    }

    static ParseWhereObject(where){
        let tWhere = []
        let values = []
        Object.entries(where).forEach(entry => {
            values.push(entry[1])
            tWhere.push(`${entry[0]} = ?`)
        })
        tWhere = tWhere.join(' AND ')
        return {where: tWhere, values}
    }

    static ParseSetObject(set){
        let tSet = []
        let values = []
        Object.entries(set).forEach(entry => {
            values.push(entry[1])
            tSet.push(`${entry[0]} = ?`)
        })
        tSet = tSet.join(', ')
        return {set: tSet, values}
    }

    static ParseCreateObject(create){
        let values = []
        let tCreate = []
        let tValues = []
        Object.entries(create).forEach(entry => {
            values.push(entry[1])
            tCreate.push(entry[0])
            tValues.push('?')
        })
        tValues = tValues.join(', ')
        tCreate = `(${tCreate.join(', ')}) VALUES (${tValues})`
        return {create: tCreate, values}
    }
}