const userSchema = require("../models/UserModel")

const getUsers = async(req,res)=>{


    const users = await userSchema.find().populate('role')
    res.json({
        message:"user fetch successfully",
        data:users
    })

}

const getUsersByStatus = async(req,res)=>{

    const userStatus = req.params.status //true false
    const users = await userSchema.find({status:userStatus})
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

const upadteUser = async(req,res)=>{

//update users set name = 'amit',....
//data -->req.body
//id -->req.params.id
//req object
//params. object
//req body object
    const id = req.params.id

    console.log("id",id)
    console.log("req body",req.body)

    const updateUser = await userSchema.findByIdAndUpdate(id,req.body)
    res.status(201).json({
        message:"user updated successfully",
    })




}


const archiveUser = async(req,res)=>{

    const id = req.params.id //1,2,3,4

    const archivedUser = await userSchema.findByIdAndUpdate(id,{status:false})
    
    res.status(201).json({
        message:"user archived successfully",
    })



}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    upadteUser,
    getUsersByStatus,
    archiveUser
}