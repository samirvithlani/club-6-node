const jwt = require('jsonwebtoken');
const secret = "samir"


const generateToken = (payload) => {

    const token =   jwt.sign(payload,secret)   
    return token
}


return module.exports = {generateToken} 
