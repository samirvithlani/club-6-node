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

const deleteUser = async(req,res)=>{

    //delete from users where id = 1
    //db.users.remove({id:1})
    const id = req.params.id
    const deletedUser  = await userSchema.findByIdAndDelete(id)
    console.log("deleted user",deletedUser)
    if(deletedUser==null){
        res.status(404).json({
            message:"user not found"
        })
    }
    else{
        res.json({
            message:"user deleted successfully",
            data:deletedUser
        })
    }


}


module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser
}