const Item = require("../Models/Item")
const Inventory = require("../Models/Inventory")

module.exports = function HandleItem(socket) {
    socket.on('getInventory', async (id) => {let inventoryData = await Inventory.Get(7)
        inventoryData = JSON.parse(inventoryData.json)
        const returnData =  new Object
        let amount=0
        for (var property in inventoryData) {
            amount++
             if (Object.prototype.hasOwnProperty.call(inventoryData, property)) {
                returnData[property] = []
                for (let entry = 0; entry < Object.entries(inventoryData[property]).length; entry++) {
                    let data = await Item.GetInventoryItem(inventoryData[property][entry].id)
                    let temp = {}

                    Object.keys(data).forEach(result => {
                        temp[result] = data[result]
                    });

                    temp.id = inventoryData[property][entry].id
                    temp.value = inventoryData[property][entry].value
                    returnData[property].push(temp)
                }
             }
             if(amount == Object.entries(inventoryData).length){
                socket.emit("returnedInventory", returnData)
            }
        }
        
    })
}