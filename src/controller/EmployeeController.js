const employeeSchema = require('../models/EmployeeModel');

const addEmployee = async (req, res) => {

    const savedEmployee = await employeeSchema.create(req.body)
    res.status(201).json({
        message: 'Employee added successfully',
        data: savedEmployee
    })

}
const getAllEmployees = async (req, res) => {


    const employees = await employeeSchema.find()
    res.status(200).json({
        message: 'Employee fetched successfully',
        data: employees
    })

}

module.exports = {
    addEmployee,
    getAllEmployees
}