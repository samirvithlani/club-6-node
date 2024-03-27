// console.log("Hello Node")
// // var sname = "raj"
// // console.log("name = ",sname)

// //require('./users.js') //import...users.js file
// const user = require('./users.js') //import...users.js file
// console.log(user)
// console.log(user.userName)
// console.log(user.userEmail)

// ----------------------------------------------------------------------------------------------------------------------------


//2)

// const employee = require('./employee') //import...employee.js file
// console.log(employee)

// employee.getEmployee()
// employee.printEmployee()

const { getEmployee,printEmployee,empName} = require('./employee') //import...employee.js file
getEmployee()
printEmployee()
console.log(empName)


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
   
})

app.get("/userbyemail/:email",async(req,res)=>{


    console.log("req.....",req)
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





