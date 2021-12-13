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
        switch (data) {
            case "forward":
                s.position.y += 10
                break;
            case "backward":
                s.position.y -= 10
                break;
            case "left":
                s.position.x -= 10
                break;
            case "right":
                s.position.x += 10
                break;
            default:
                break;
        }
        s.view.position = s.position
        // console.log(s.view)
        // global.sockets[socket.id].position +=
    })
}