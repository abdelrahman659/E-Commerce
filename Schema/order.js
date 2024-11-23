const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
        // reference to user Schema
    orderItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],

    paymentDetails: {
        cardNumber: { type: Number, required: true },
        userName: { type: String, required: true },

    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model("Order", orderModel);