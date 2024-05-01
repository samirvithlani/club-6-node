const zod = require('zod');

const EmployeeValidationSchema  =zod.object({
    body: zod.object({
        name: zod.string().min(3).max(50),
        email: zod.string().email(),
        age: zod.number().int().positive().min(18).max(60)
    })
    
})
module.exports = EmployeeValidationSchema;