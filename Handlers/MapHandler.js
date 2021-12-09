const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")
const Vector2 = require("../Core/Vector2")

let tilesets = undefined
let map = undefined

let sockets = {}

module.exports = function HandleMap(socket){
    socket.on('tilesets', async (data) => {
        if(tilesets === undefined){
            tilesets = await Map.Load(`${__dirname}/../Map/graybox.json`)
        }
        console.log("Received request for map")
        console.time("pizza")
        console.timeEnd("pizza")
        console.log("Map loaded")
        socket.emit('tilesets', tilesets)
        console.log("viewwidth and viewheight client")
        sockets[socket.id] = socket
        sockets[socket.id].view = data
    })

    socket.on('resize', (data) => {
        // console.log(data)
        sockets[socket.id] = socket
        sockets[socket.id].view = data
    })

    socket.on('map', async (data) => {
        if(map === undefined){
            map = Map.map
        }
        let s = sockets[socket.id]
        let tMap = []
        map.map(gameObject => {
            if(gameObject.position.x + gameObject.size.x * gameObject.scale.x >= s.view.position.X &&
                gameObject.position.x < s.view.position.X + s.view.size.X * s.view.scale.X &&
                gameObject.position.y + gameObject.size.y * gameObject.scale.y >= s.view.position.Y &&
                gameObject.position.y < s.view.position.Y + s.view.size.Y * s.view.scale.Y){
                tMap.push(gameObject)
            }
        })
        
        socket.emit('map', tMap)
    })

    // setInterval(() => {
        // 
        
    // }, 1000);
}

setInterval(() => {
    if(map == undefined) return
    Object.values(sockets).forEach(socket => {
        let tMap = []
        map.map(gameObject => {
            if(gameObject.position.x + gameObject.size.x * gameObject.scale.x >= socket.view.position.X &&
                gameObject.position.x < socket.view.position.X + socket.view.size.X * socket.view.scale.X &&
                gameObject.position.y + gameObject.size.y * gameObject.scale.y >= socket.view.position.Y &&
                gameObject.position.y < socket.view.position.Y + socket.view.size.Y * socket.view.scale.Y){
                tMap.push(gameObject)
            }
        })
        socket.emit('map', tMap)
    })
}, 1000/30);