const Item = require("../Models/Item")

module.exports = function HandleItem(socket){
    socket.on('getItem', async (data) => {
        console.log(data)
        let item = await Item.GetItem(1)
        socket.emit("item", item)
    })
}