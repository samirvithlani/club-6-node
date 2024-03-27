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
module.exports = {
    getUsers,
    getUserById
}