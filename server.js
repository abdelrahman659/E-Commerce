const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRouter = require('./Router/user');
const productRouter = require('./Router/product');
const Order = require("./Router/order");
app.use(bodyParser.json());

const uri= "mongodb+srv://Abdo:mage2024@cluster0.wrgsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(uri);
        console.log("Database Connected...")
    } catch (err) {
        console.log("Database Connected error", err);
        process.exit();
    }
}

connectToDB();

app.get('/', (req, res) => {

    res.send('server is running...')
});
app.use('/', userRouter);
app.use('/',productRouter);
app.use('/',Order);
app.listen(9000)