const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")
const Vector2 = require("../Core/Vector2")
const GameObject = require("../Core/GameObject")
const Player = require("../Elements/Player")

let tilesets = undefined
let map = undefined

module.exports = function HandleMap(socket){
    socket.on('tilesets', async (data) => {
        if(tilesets === undefined){
            tilesets = await Map.Load(`${__dirname}/../Map/map2.json`)
        }
        socket.emit('tilesets', tilesets)
        Object.keys(data).map(key => {
            let value = data[key]
            data[key] = new Vector2(value.X, value.Y)
        })
        global.sockets[socket.id].camera = data
        global.sockets[socket.id].player = new Player()
    })

    socket.on('resize', (data) => {
        let s = global.sockets[socket.id]
        s.camera.size = new Vector2(data.size.X, data.size.Y)
        s.camera.position = new Vector2(s.player.position.x - s.camera.size.x / 2, s.player.position.y - s.camera.size.y / 2)
    })

    socket.on('map', async (data) => {
        if(map === undefined){
            map = Map.map
        }
        let s = global.sockets[socket.id]
        map.find(gameObject => {
            if(gameObject.type == "SpawnPoint"){
                s.player.position = new Vector2(gameObject.position.x, gameObject.position.y)
                s.camera.position = new Vector2(gameObject.position.x - s.camera.size.x / 2, gameObject.position.y - s.camera.size.y / 2)
            }
        })
        socket.emit('map', {map, camera:s.camera})
    })
}

setInterval(() => {
    if(map == undefined) return
    Object.values(global.sockets).forEach(socket => {
        if(!socket.camera) return
        // let tMap = []
        // map.map(gameObject => {
        //     if(isInRange(gameObject, socket)){
        //         tMap.push(gameObject)
        //     }
        // })
        let entities = []
        Player.players.map(player => {
            if(isInRange(player, socket)){
                entities.push(player)
                // tMap.push(player)
            }
        })
        // console.log(tMap.length)
        // socket.socket.emit('map', {camera:socket.camera, map: tMap}) //entities
        socket.socket.emit('entities', {camera:socket.camera, entities})
        // socket.socket.emit('map', {camera:socket.camera, map:tMap})
    })
}, 1000/30); //30

function isInRange(gameObject, socket){
    if(gameObject == undefined) return
    if(gameObject.position == undefined) return
    if(gameObject.position.x + gameObject.size.x * gameObject.scale.x >= socket.camera.position.x &&
        gameObject.position.x < socket.camera.position.x + socket.camera.size.x * socket.camera.scale.x &&
        gameObject.position.y + gameObject.size.y * gameObject.scale.y >= socket.camera.position.y &&
        gameObject.position.y < socket.camera.position.y + socket.camera.size.y * socket.camera.scale.y){
        return true
    }
    return false
}