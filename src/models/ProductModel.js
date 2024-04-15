const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type: String,
    },
    price:{
        type: Number,
    },


})

module.exports = mongoose.model('Product', productSchema);