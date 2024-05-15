//express
const express = require('express'); //import express
const app = express(); //initialize express
const mongoose = require('mongoose'); //import mongoose
app.use(express.json()); //middleware for json data

//routes...
const userRoutes = require('./src/routes/UserRoutes')
const employeeRoutes = require('./src/routes/EmployeeRoutes')
const roleRoutes = require('./src/routes/RoleRoutes')
const productRoutes = require('./src/routes/ProductRoutes')
const cartRoutes = require('./src/routes/CartRoutes')
const uploadRoutes = require('./src/routes/UploadRoutes')
//studentRoutes..

//routes use
//localhost:3000/user/users
app.use("/user",userRoutes)
//localhost:3000/employee/addemployee
//app.js --> routes ---> conttoller -->db[model] -->controller ---> routeso
app.use("/employee",employeeRoutes)
app.use("/role",roleRoutes)
app.use("/product",productRoutes)
app.use("/cart",cartRoutes)
app.use("/upload",uploadRoutes)

//app.use("/student",studentRoutes)




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
