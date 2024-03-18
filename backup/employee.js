const getEmployee= ()=>{


        console.log("Hello from employee")


}
const printEmployee = ()=>{
    console.log("print employee")
}

var empName = "Raj"

// module.exports = getEmployee; //export...getEmployee function
// module.exports = printEmployee; //export...printEmployee function

module.exports = {
    getEmployee,printEmployee,empName
}