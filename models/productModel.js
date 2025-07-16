const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    Images:[{image:String}],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createAt:Date

});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;