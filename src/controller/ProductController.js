const productSchema = require('../models/ProductModel');

const createProduct = async (req, res) => {

    try{
        const createdProduct = await productSchema.create(req.body);
        res.status(201).json({
            status: 'success',
            data: createdProduct
        });
    }catch(error){
        res.status(500).json({
            status: 'error',
            message: error.message
        });

    }
}

module.exports = {
    createProduct
}