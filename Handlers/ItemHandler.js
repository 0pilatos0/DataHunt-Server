const Item = require("../Models/Item")
const Inventory = require("../Models/Inventory")

module.exports = function HandleItem(socket) {
    socket.on('getInventory', async (id) => {
        let inventoryData = await Inventory.Get(7)
        inventoryData = JSON.parse(inventoryData.json)
        const returnData =  new Object
        let amount=0
        for (var property in inventoryData) {
            amount++
             if (Object.prototype.hasOwnProperty.call(inventoryData, property)) {
                returnData[property] = []
                for (let entry = 0; entry < Object.entries(inventoryData[property]).length; entry++) {
                    returnData[property].push(entry.id, entry.value)
                }
             }
             if(amount == Object.entries(inventoryData).length){
                console.log('YOOOOOOOOOOoo')
            }
         }

         console.log(returnData)


        // Object.entries(inventoryData).map(async entry => {
        //     let counter = 0;
        //     entry[1].forEach(async element => {
        //         console.log(entry[1])
        //         let temp = await Item.GetInventoryItem(element.id)

        //         for (var property in element) {
        //             if (Object.prototype.hasOwnProperty.call(element, property)) {
        //                 temp[property] = element[property]
        //             }
        //             //var temp heeft data hier 
        //             if (Object.keys(temp).length === 7) {
        //                 console.log(Object.keys(temp).length)
        //                 returnData.push(temp)
        //             }
        //         }
        //         counter++
        //         //var temp is leeg hier
        //         if (entry[1].length == counter) {
        //             console.log(returnData)
        //             socket.emit("returnedInventory", returnData)
        //         }
        //     });
        // })
    })
}