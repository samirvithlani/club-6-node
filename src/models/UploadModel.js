const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    //name,email,age...
    profile_pic:{
        type:String,
    }
})
module.exports = mongoose.model('Uploads', uploadSchema); //exporting the schema