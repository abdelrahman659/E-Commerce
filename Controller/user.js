const userModel = require("../Schema/user");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register= async(req,res)=>{
    try{
        let newUser = new userModel(req.body);
        // Encrypt users Password 
        const hashPassword = await bcrypt.hash(req.body.password,10);
        // Assign userPassword to hashPassword
        newUser.password = hashPassword;
        await newUser.save();
        res.json({message:"new user created successfully",data: newUser})
    }catch(err){
        console.log(err);
        res.status(400).json({ message: 'error', err });

    }
}



exports.login = async (req,res)=>{
    try{
        let user = await userModel.findOne({email:req.body.email})
if(!user){
    res.status(401).json({ message: 'Invalid email or password' })}
    let passwordCheck = await user.comparePassword(req.body.password);
    if(passwordCheck == false){
        res.status(401).json({ message: 'Invalid email or password' });}

        const token = jwt.sign({_id:user._id, email: user.email,role: user.role},"secret")
    res.json({message:"You are currently login",user:{firstName:user.firstName,email:user.email,token}})
    }catch(err){
        console.log(err);
        
        res.status(400).json({ message: 'error', err })

    }
}