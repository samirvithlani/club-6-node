const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optSchema = new Schema({
    otp:{
        type: Number,
    },
    email:{
        type: String,
    },
    time:{
        type: Date,
    }

})
module.exports = mongoose.model('otp',optSchema);