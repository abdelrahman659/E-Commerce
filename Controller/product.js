const productSchema = require('../Schema/product');

// create product 
exports.createProduct = async(req,res)=>{
    try{
        if(req.user.role ==="admin"){
            let newProduct = await productSchema.create(req.body);
            res.json({message:"New Product is created",data:newProduct})
        }else{
            res.status(403).json({message:"This Account don't have access"})
        }
    }catch(err){
        res.status(400).json({message:'something went wrong..',error:err});
    }
};

// Get all  
exports.getAllProduct = async(req,res)=>{
    try{
        let products = await productSchema.find();
        res.json({message:'All Products',data:products});

    }catch(err){
        res.status(400).json({message:"Cannot get all data",error:err})

    }
};

//Get one Product
exports.getOneProduct = async(req,res)=>{
    try{
        let product = await productSchema.find({_id: req.params.id});
        res.json({message:"product data..",data:product})

    }catch(err){
        res.status(400).json({message:"something went wrong",err})

    }
};

// update product 
exports.updateProduct = async(req,res)=>{
    try{
        await productSchema.findByIdAndUpdate(req.params.id,req.body);
        res.json({message:"your product is updated",data:[]});
    }catch(err){
        res.status(400).json({message:"something went wrong",err})
    }
};


// Delete product 
exports.deleteProduct=async(req,res)=>{
    try{
        if(req.user.role === "admin"){
            await productSchema.findByIdAndDelete(req.params.id);
            res.json({message:"product is deleted"})
        }else{
            res.status(403).json({message:"you do not have access"})
        }

    }catch(err){
        res.status(400).json({message:"something went wrong",err})
    }
}