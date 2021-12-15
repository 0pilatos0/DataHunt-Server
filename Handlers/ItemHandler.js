const Item = require('../Database/Models/Item')


module.exports = function HandleItem(socket){
    socket.on('getItem', async (data) => {
        console.log(data)
        let item = await Item.Find({
            where: {
                id: 1
            }
        })
        socket.emit("item", item)
    })
}