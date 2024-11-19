const express = require("express");
const router = express.Router();
const productController = require("../Controller/product");
const authentication = require("../middleware/auth")

// Create new product (Admin)
router.post("/api/product/createProduct",authentication,productController.createProduct);

//Get All Product 
router.get("/api/product/allProduct",authentication,productController.getAllProduct);

//Get one Product
router.get("/api/product/:id",authentication,productController.getOneProduct);

// Update product 
router.put("/api/product/update/:id",authentication,productController.updateProduct);

//Delete product (Admin)

router.delete("/api/product/delete/:id",authentication,productController.deleteProduct);

module.exports = router;