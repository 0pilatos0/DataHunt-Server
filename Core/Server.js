const http = require('http')
const io = require('socket.io')
const Pizza = require('../Models/pizza')
const MySQL = require('./MySQL')
const HandleUser = require('../Handlers/UserHandler')

module.exports = class Server{
    #http = http.createServer()
    #io = io().attach(this.#http, {
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false,
        cors: {
            origin: '*'
        }
    })
    #mysql = new MySQL()

    constructor() {
        new Pizza()
        this.#http.listen(3000, () => {
            console.log(`Server listening on http://localhost:${this.#http.address().port}`)
        })

        this.#io.on('connection', (socket) => {
            console.log(`+${socket.id}`)

            HandleUser(socket)
            
            socket.on('disconnect', () => {
                console.log(`-${socket.id}`)
            })
        })
    }
}