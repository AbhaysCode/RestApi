const connectDB = require("./db/connect");
const products = require("./products");
const product = require('./models/product');
require("dotenv").config();

const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.create(products);
        console.log("Data has been successfully added to the database");
    }catch(e){
        console.log("Error during uploading of data is ",e);
    }
}
start();
