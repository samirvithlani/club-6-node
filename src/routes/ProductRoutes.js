const router = require('express').Router();
const productController = require('../controller/ProductController');
router.post("/product", productController.createProduct);
router.post("/products", productController.bulkCreateProduct);
module.exports = router;