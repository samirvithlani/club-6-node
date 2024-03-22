//express
const express = require('express'); //import express
const app = express(); //initialize express
const mongoose = require('mongoose'); //import mongoose

const userSchema = require('./src/models/UserModel'); //importing the schema

//localhost:3000/users
app.get("/users",async(req,res)=>{

    //db.users.find()
    const users = await userSchema.find()
    console.log(users);
    //res.send("ok..")
    //res.send(users);
    res.json({
        message:"user fetch successfully",
        data:users
    })
})

//:id wildcard character
//localhost:3000/users/y87682uj
//select * from users where id = 
//id name email

app.get("/users/:id",async(req,res)=>{

    const id = req.params.id
    const user  = await userSchema.findById(id)
    res.json({
        message:"user fetch successfully",
        data:user
    })
    // console.log("params...",req.params);
    // console.log(id);
    // res.send("ok..")

})

app.get("/userbyemail/:email",async(req,res)=>{


    const email = req.params.email
    const user = await userSchema.find({email:req.params.email})
    console.log(user);
    if(user && user.length>0){
        res.json({
            message:"user fetch successfully",
            data:user
        })
    }
    else{
        res.json({
            message:"user not found",
            data:[]
        })
    }
    



})



//db connection....
//server creation

const db = mongoose.connect("mongodb://127.0.0.1:27017/club6_1")
db.then((data)=>{
    console.log("DB CONNECTED");
}).catch((err)=>{
    console.log(err);
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server is running on port no ' + PORT);
})
