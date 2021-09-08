const Model = require("../Core/Model");

module.exports = class Pizza extends Model {
    constructor() {
        super("users")
        // this.All().then(d => {
        //     console.log(d)
        // })
        // this.Find({
        //     where: {
        //         name: 'Pizza'
        //     }
        // }).then(d => {
        //     console.log(d)
        // })
        // this.FindId({
        //     where: {
        //         name: 'Pizza'
        //     }
        // }).then(d => {
        //     console.log(d)
        // })
        // this.Select({
        //     where: {
        //         name: 'Pizza'
        //     },
        //     // joins: [
        //     //     'INNER JOIN users ON users.id = pizza.id',
        //     //     'INNER JOIN pizza ON users.id = pizza.id'
        //     // ]
        // }).then(d => {
        //     console.log(d)
        // })
        // this.Delete({
        //     table: 'users',
        //     where: {
        //         'id': 123
        //     }
        // })
        // this.Update({
        //     table: 'users',
        //     set: {
        //         'id': 'pizza'
        //     },
        //     where:{
        //         id: 123
        //     }
        // })
        // this.Create({
        //     table: 'users',
        //     create: {
        //         'username': 'pizza'
        //     }
        // })
    }
}