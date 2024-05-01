
const validateUser = (req, res, next) => {

    //var token = "123456"
    var token = req.headers.token
    console.log(token)
    if(token == "123456"){
        console.log("Token is valid")
        next()
    }
    else{
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}
module.exports = {validateUser}
