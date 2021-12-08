const Mailer = require("../Core/Mailer")
const Regex = require("../Core/Regex")
const Salter = require("../Core/Salter")
const HTMLLoader = require("../Loaders/HTMLLoader")
const User = require('../Database/Models/User.js')
const JSONLoader = require("../Core/Loaders/JSONLoader")
const Map = require("../Map/Map")

let tilesets = undefined
let map = undefined

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
    })

    socket.on('map', async (data) => {
        if(map === undefined){
            map = Map.map
        }
        console.log("?")
        socket.emit('map', map)
    })

    // setInterval(() => {
        // 
        
    // }, 1000);
}