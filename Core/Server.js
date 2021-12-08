const http = require('http')
const io = require('socket.io')
const MySQL = require('./MySQL')
const HandleUser = require('../Handlers/UserHandler')
const HandleItem = require('../Handlers/ItemHandler')
const HandleMap = require('../Handlers/MapHandler')

module.exports = class Server{
    #http = http.createServer()
    #io = io().attach(this.#http, {
        pingInterval: 60000,
        pingTimeout: 60000,
        cookie: false,
        cors: {
            origin: '*'
        }
    })
    #mysql = new MySQL()
    map = []

    /**
     * Fetches the server instance
     * @returns {null}
     */
    constructor() {
        this.#http.listen(3000, () => {
            console.log(`Server listening on http://localhost:${this.#http.address().port}`)
        })

        this.#io.on('connection', (socket) => {
            console.log(`+${socket.id}`)
            
            socket.use((packet, next) => {
                let data = packet[1]
                let replaceData = function(data){
                    if(typeof data !== "undefined"){
                        switch (typeof data) {
                            case "string":
                                data = data.replace(/['"`<>\\{}]/g, '')
                                break;
                            case "object":
                                Object.values(data).map(value => {
                                    data[Object.keys(data)[Object.values(data).indexOf(value)]] = replaceData(value)
                                })
                                break;
                            default:
                                break;
                        }
                    }
                    return data
                }
                data = replaceData(data)
                packet[1] = data
                next()
            })

            HandleUser(socket)
            HandleItem(socket)
            HandleMap(socket)

            socket.on('disconnect', () => {
                console.log(`-${socket.id}`)
            })
        })
    }
}