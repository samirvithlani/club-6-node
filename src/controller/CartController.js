const cartSchema = require('../models/CartModel');

const createCart = async (req, res) => {

    try{
        const createdCart = await cartSchema.create(req.body);
        res.status(201).json({
            status: 'success',
            data: createdCart
        })

    }catch(error){

        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }

}

const getCartData = async (req, res) => {

    try{
        const cartData = await cartSchema.find().populate('user').populate('products');
        res.status(200).json({
            status: 'success',
            data: cartData
        })
    }catch(error){

        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
    


}
module.exports = {
    createCart,
    getCartData
}