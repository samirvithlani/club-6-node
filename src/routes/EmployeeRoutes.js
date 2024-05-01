const router = require('express').Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const zodMiddleware = require('../middleware/ZodMiddleware')
const EmployeeValidationSchema = require('../util/EmployeeValidationShema')
//api url..
const employeeController = require('../controller/EmployeeController')
router.post("/addemployee",zodMiddleware.validateSchema(EmployeeValidationSchema),employeeController.addEmployee)
router.get("/getemployees",authMiddleware.validateUser,employeeController.getAllEmployees)
module.exports = router



//adEmployee ---> middleware --->
