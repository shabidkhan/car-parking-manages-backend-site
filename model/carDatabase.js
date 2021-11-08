const mongoose = require("mongoose")

const carSchema = mongoose.Schema(
    {
    carNumber: {
        type: String,
        required: true
        },
    slotNumber:{
        type:String
    }
    }
)
console.log("collection");


module.exports = mongoose.model("cars",carSchema)