const userSchema = require("../models/UserModel")

const getUsers = async(req,res)=>{


    const users = await userSchema.find()
    res.json({
        message:"user fetch successfully",
        data:users
    })

}

const getUserById = async(req,res)=>{

    const user = await userSchema.findById(req.params.id)
    res.json({
        message:"user fetch successfully",
        data:user
    })

}

const addUser = async(req,res)=>{


    console.log("req body",req.body)
    const savedUser = await userSchema.create(req.body)
    
    res.status(201).json({
        message:"user add successfully",
        data:savedUser
    })

}


module.exports = {
    getUsers,
    getUserById,
    addUser
}