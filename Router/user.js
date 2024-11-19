const express = require("express");
const router = express.Router();
const userController = require('../Controller/user')
// create new user (signup)
router.post("/api/user/signup",userController.register);
// user Login 
router.post('/api/user/login',userController.login);

module.exports = router;