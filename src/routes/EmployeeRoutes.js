const router = require('express').Router()
//api url..
const employeeController = require('../controller/EmployeeController')
router.post("/addemployee",employeeController.addEmployee)
router.get("/getemployees",employeeController.getAllEmployees)
module.exports = router

