const express = require("express");
const router = express.Router();
const orderController = require("../Controller/order");
const authentication = require("../middleware/auth")

// create Order
router.post("/api/order/createOrder",authentication,orderController.createOrder)

// get order
router.get("/api/order/getOrder/:id",authentication,orderController.getOneOrder)

// delete order
router.delete("/api/order/deleteOrder/:id",authentication,orderController.deleteOrder);

module.exports = router;