//express
const express = require('express'); //import express
const app = express(); //initialize express
const mongoose = require('mongoose'); //import mongoose

const userSchema = require('./src/models/UserModel'); //importing the schema

//server creation
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



//db connection....

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
