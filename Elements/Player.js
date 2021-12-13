const GameObject = require("../Core/GameObject")


module.exports = class Player extends GameObject{
    static players = []

    constructor(){
        super()
        this.type = "Player"
        Player.players.push(this)
    }
}