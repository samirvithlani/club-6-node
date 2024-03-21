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






