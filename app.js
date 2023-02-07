const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const products_route = require("./routes/products");
const connectDB = require('./db/connect');
require("dotenv").config();


app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page !!");
})

app.use("/api/products",products_route);

const start = async() =>{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log(`Listening on Port ${PORT}`)
    })
}
start()
