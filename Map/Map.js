
// import Tileset from "../Core/Tileset.js";
// import Event from "../Core/Event.js";
// import Sprite from "../Core/Drawables/Sprite.js";
// import Vector2 from "../Core/Vector2.js";
// import GameObject from "../Core/GameObject.js";
// import Rectangle from "../Core/Drawables/Rectangle.js";
const GameObject = require('../Core/GameObject')
const JSONLoader = require('../Core/Loaders/JSONLoader')
const Vector2 = require('../Core/Vector2')
const fs = require('fs')
// const Tileset = require('../Core/Tileset')

const spriteScaleFactor = 4

module.exports = class Map {
    static map

    constructor(){
    }

    static async Load(pathToMainJsonFile){
        let count = 0
        return new Promise(async (resolve, reject) => {
            let tilesets = []
            let jsonData = await JSONLoader.Load(pathToMainJsonFile)
            let tilesetCount = 0
            jsonData.tilesets.map(async t => {
                let tilesetData = await JSONLoader.Load(`./Map/${t.source}`)
                tilesetData.offset = t.firstgid
                tilesetData.image = `${t.source.substr(0, t.source.lastIndexOf("/"))}/${tilesetData.image}`
                let data = fs.readFileSync(`${__dirname}/${tilesetData.image}`)
                tilesets.push({
                    image: `data:image/png;base64,${data.toString('base64')}`,
                    index: tilesetData.offset,
                    width: tilesetData.imagewidth,
                    height: tilesetData.imageheight,
                    tileWidth: tilesetData.tilewidth,
                    tileHeight: tilesetData.tileheight,
                })
                count += tilesetData.tilecount
                tilesetCount++
                if(tilesetCount == jsonData.tilesets.length){
                    let map = []
                    jsonData.layers.map(l => {
                        switch (l.type) {
                            case "objectgroup":
                                l.objects.forEach(object => {
                                    let gameObject = new GameObject(new Vector2(object.x * spriteScaleFactor, object.y * spriteScaleFactor));
                                    gameObject.type = object.type
                                    map.push(gameObject)
                                });
                                break;
                            case "tilelayer":
                                for (let y = 0; y < l.height; y++) {
                                    for (let x = 0; x < l.width; x++) {
                                        let tileIndex = l.data[y * l.width + x]
                                        if(tileIndex - 1 > -1){
                                            let tilePos = new Vector2(x * 16 * spriteScaleFactor, y * 16 * spriteScaleFactor)
                                            let tileSize = new Vector2(16 * spriteScaleFactor, 16 * spriteScaleFactor)
                                            let gameObject = new GameObject(tilePos)
                                            gameObject.tileIndex = tileIndex
                                            // gameObject.type = tile.type
                                            map.push(gameObject)
                                        }
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    })
                    Map.map = map
                    return resolve({tilesets: tilesets.sort((a, b) => a.index - b.index), count})
                }
            });
        })
        
    }
}