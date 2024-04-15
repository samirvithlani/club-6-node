const router = require('express').Router();
const cartController = require('../controller/CartController');
router.post("/cart", cartController.createCart);
router.get("/cart", cartController.getCartData);
module.exports = router;