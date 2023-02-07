const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "price":{
        type:Number,
        required:true
    },
    "featured":{
        "type":Boolean,
        default:false
    },
    "rating":{
        type:Number,
        default:4.9
    },
    "createdAt":{
        type:Date,
        default:Date.now()
    }, 
    "company":{
        type:String,
        values:["apple","samsung","dell","mi"],
        mesaage:`not supported !!`
    }
})
module.exports = mongoose.model("Product",productSchema);