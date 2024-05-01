//validationSCeham = (employeeValidationSchema)
//validateSchema(userValidationSchema)
const validateSchema = (schema)=>async(req, res, next)=>{

    //schema  --EmployeeValidationSchema
    try{

        await schema.parseAsync({
            body: req.body, //name,email,age
        });

        next(); // goto next part...

    }catch(err){
        res.status(400).json({
            message: err
        })
    }
}
module.exports = {
    validateSchema
}