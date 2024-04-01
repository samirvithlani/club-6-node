const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//db.employee.find
//employeeSchema.
const employeeSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    age:{
        type: Number,
    }

})
module.exports = mongoose.model('Employee', employeeSchema);