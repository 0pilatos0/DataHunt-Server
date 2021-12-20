const Vector2 = require("./Vector2")

module.exports = class GameObject{
    static counter = 0
    size = new Vector2(16 * 4)
    scale = new Vector2(1, 1)

    constructor(position){
        this.position = position
        this.id = GameObject.counter++
    }
}