const Character = require("../Models/Character")

module.exports = function HandleCharacters(socket){
    socket.on('getCharacters', async (data) => {
        console.log(data)
        let characters = await Character.getAll(data)
        socket.emit("getCharacters", characters)
    })
}