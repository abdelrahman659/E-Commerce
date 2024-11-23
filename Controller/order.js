const orderSchema = require("../Schema/order");

// create new Order
exports.createOrder = async (req, res) => {
    try {
        let newOrder = await orderSchema.create(req.body);
        res.json({ message: "Your order is:", data: newOrder })

    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "invalid card data", err })
    }
};

// get one Order

exports.getOneOrder = async (req, res) => {
    try {
        let userOrder = await orderSchema.findById( req.params.id).populate('User','email lastName').exec();
        res.json({ message: "user order is", userOrder })
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "invalid card data", err });
    }
}

// delete order

exports.deleteOrder = async (req, res) => {
    try {
        await orderSchema.findByIdAndDelete(req.params.id);
        res.json({ message: "Order deleted" });
    } catch (err) {
        res.status(400).json({message:"something went wrong",err})
    }
}

