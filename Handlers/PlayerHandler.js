const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")
const Vector2 = require("../Core/Vector2")

module.exports = function HandlePlayer(socket){
    socket.on('movement', async (data) => {
        let s = global.sockets[socket.id]
        if(!s.player) return
        if(data.forward){
            s.player.position.y -= 10
        }
        if(data.backward){
            s.player.position.y += 10
        }
        if(data.left){
            s.player.position.x -= 10
        }
        if(data.right){
            s.player.position.x += 10
        }
        let tPosition = new Vector2(0, 0)
        if(s.player.position.x <= s.camera.size.x / 2){
            tPosition.x = 0
        }
        else{
            tPosition.x = s.player.position.x - s.camera.size.x / 2
        }
        if(s.player.position.y <= s.camera.size.y / 2){
            tPosition.y = 0
        }
        //TODO add based on map size
        else{
            tPosition.y = s.player.position.y - s.camera.size.y / 2
        }
        s.camera.position = tPosition
    })
}