const Character = require('../Database/Models/Character')
const User = require('../Database/Models/User')
const Stat = require('../Database/Models/Stat')

module.exports = function HandleCharacters(socket) {
    socket.on('saveNewCharacter', async (data) => {
        Object.entries(data).forEach(([key, value]) => {
            if (Number.isInteger(value) || key === 'name') {
            } else {
                socket.emit("savedCharacter", 'error')
                return
            }
        })

        let uid = await User.FindId({
            where: {
                username: global.sockets[socket.id].username
            }
        })

        let tempName = data.name
        let tempClass = data.class

        delete data.name
        delete data.class

        await Character.Create({
            create: {
                'name': tempName,
                'user_id': uid,
                'class_id': tempClass,
                'sprite': JSON.stringify(data),
                'kills': 0,
                'deaths': 0,
                'level': 1
            }
        })

        let cid = await Character.Last({
            where: {
                'user_id': uid,
            }
        })

        await Stat.Create({
            create: {
                'character_id': cid.id,
                'money': 0,
                'exp': 0,
                'level': 1,
                'health': 100,
                'attack': 10,
                'speed': 10,
                'defense': 10
            }
        })

        socket.emit("savedCharacter", 'success')
    })
    socket.on('getCharacters', async (data) => {
        console.log(data)
        let characters = await Character.All(data)
        socket.emit("getCharacters", characters)
    })
}