//express
const express = require('express'); //import express
const app = express(); //initialize express
const mongoose = require('mongoose'); //import mongoose
app.use(express.json()); //middleware for json data

//routes...
const userRoutes = require('./src/routes/UserRoutes')


//routes use
//localhost:3000/user/users
app.use("/user",userRoutes)




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
