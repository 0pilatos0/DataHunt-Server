const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")
const Vector2 = require("../Core/Vector2")
const GameObject = require("../Core/GameObject")

let tilesets = undefined
let map = undefined
// global.sockets = {}

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
        Object.keys(data).map(key => {
            let value = data[key]
            data[key] = new Vector2(value.X, value.Y)
        })
        global.sockets[socket.id].view = data
    })

    socket.on('resize', (data) => {
        
        global.sockets[socket.id].view = data
    })

    socket.on('map', async (data) => {
        if(map === undefined){
            map = Map.map
        }
        let s = sockets[socket.id]
        let tMap = []
        map.map(gameObject => {
            if(gameObject.position.x + gameObject.size.x * gameObject.scale.x >= s.view.position.x &&
                gameObject.position.x < s.view.position.x + s.view.size.x * s.view.scale.x &&
                gameObject.position.y + gameObject.size.y * gameObject.scale.y >= s.view.position.y &&
                gameObject.position.y < s.view.position.y + s.view.size.y * s.view.scale.y){
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
    Object.values(global.sockets).forEach(socket => {
        let tMap = []
        map.map(gameObject => {
            if(gameObject.position.x + gameObject.size.x * gameObject.scale.x >= socket.view.position.x &&
                gameObject.position.x < socket.view.position.x + socket.view.size.x * socket.view.scale.x &&
                gameObject.position.y + gameObject.size.y * gameObject.scale.y >= socket.view.position.y &&
                gameObject.position.y < socket.view.position.y + socket.view.size.y * socket.view.scale.y){
                    let tObject = gameObject
                    tObject.position = new Vector2(gameObject.position.x - socket.view.position.x, gameObject.position.y - socket.view.position.y)
                    // console.log(tObject.position)
                    tMap.push(tObject)
            }
        })
        socket.socket.emit('map', tMap)
    })
}, 1000/30);