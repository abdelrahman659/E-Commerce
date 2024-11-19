const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
   productName: String,
  price: Number,
  merchantName: String,
  rating: Number,
  reviews: Number,
  properties: [String]
});

module.exports = mongoose.model("product",productModel);