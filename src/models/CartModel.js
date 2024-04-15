const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
{

    user:{
        type: Schema.Types.ObjectId, //foreign key
        ref: 'Users'
    },
    products:[
        {
            type: Schema.Types.ObjectId, //foreign key
            ref: 'Product'
        }
    ],
    total:{
        type: Number,
    }
},
{
    timestamps: true
}
)
module.exports = mongoose.model('Cart', cartSchema);