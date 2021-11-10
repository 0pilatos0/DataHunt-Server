const ItemsModel = require('../Database/Models/ItemsModel')


module.exports = function HandleItem(socket){
    socket.on('getItem', async (data) => {
        console.log(data)
        let item = await ItemsModel.Find({
            where: {
                id: 1
            }
        })
        socket.emit("item", item)
    })
}