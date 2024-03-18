//express
const express = require('express'); //import express
const app = express(); //initialize express



//server creation

//localhost:3000/test
//app.get 1)url 2)callback function
app.get("/test",(req,res)=>{
    console.log("Test API is called");
    //res.send("API CALLED...") //string
    //json...
    res.json({
        message:"API CALLED..."
    })
})






const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server is running on port no ' + PORT);
})
