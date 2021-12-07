const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")

module.exports = function HandleMap(socket){
    socket.on('map', async (data) => {
        console.log("Received request for map")
        console.time("pizza")
        let tilesets = await Map.Load(`${__dirname}/../Map/graybox.json`)
        console.timeEnd("pizza")
        console.log("Map loaded")
        socket.emit('tilesets', tilesets)
    })

    setInterval(() => {
        let data = []
        Map.map.map(gameObject => {
            if(gameObject.position.x >= 0 && gameObject.position.x <= 1024){
                if(gameObject.position.y >= 0 && gameObject.position.y <= 1024){
                    data.push(gameObject)
                }
            }
        })
        socket.emit('map', data)
    }, 1000);
}