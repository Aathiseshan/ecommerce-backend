const express  = require('express');
const router = express.Router();    
const {getProducts,getSingleProduct } = require('../controllers/productcontroller');
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct); 

module.exports = router;