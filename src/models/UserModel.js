const mongoose = require('mongoose');
const Schema = mongoose.Schema;//class

const userSchema = new Schema({
    
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    age:{
        type: Number,
    },
    password:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false
    },
    role:{
        type: Schema.Types.ObjectId, //foreign key //234567890djaucgfdu
        ref: 'Role'
    },
    skills:[
        {
            type:String
        }
    ],
    permissions:[
        {
            type: Schema.Types.ObjectId, //foreign key //234567890djaucgfdu
            ref: 'Permission'
        }
    ]
})
// mongoose.model('Users', userSchema)
// //db.users //userSchema.find
// module.exports = userSchema; //exporting the schema

module.exports = mongoose.model('Users', userSchema); //exporting the schema
