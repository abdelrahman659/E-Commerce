const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{ type: String, required: true, unique: true },
    password: String,
    role: String
});
// check if decoded password === userPassword
userModel.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
module.exports = mongoose.model("User",userModel);