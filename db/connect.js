const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("Connected to the Database !!");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports = connectDB;