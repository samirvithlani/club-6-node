const jwt = require("jsonwebtoken");
const secret = "samir";


const verifyToken = (req, res, next) => {


    var token = req.headers.authorization
    if(token){
        if(token.startsWith("Bearer ")){
            token = token.split(" ")[1]
            try{

                const user = jwt.verify(token, secret);
                if(user){
                    next()
                }
                else{
                    res.status(401).json({
                        message: "Unauthorized"
                    })
                }


            }catch(e){
                res.status(401).json({
                    message: "Unauthorized"
                })
            }


        }
        else{
            res.status(401).json({
                message: "Unauthorized"
            })
        }
        



    }
    else{
        res.status(401).json({
            message: "Unauthorized"
        })
    }



}



// const validateUser = (req, res, next) => {

//     //var token = "123456"
//     var token = req.headers.token
//     console.log(token)
//     if(token == "123456"){
//         console.log("Token is valid")
//         next()
//     }
//     else{
//         res.status(401).json({
//             message: "Unauthorized"
//         })
//     }
// }
// const verifyToken = (token) => {
//     try {
//       const user = jwt.verify(token, secret);
//       console.log(user);
//       return user;
//     } catch (e) {
        
//         return n;
//     }
//   };
  
  
module.exports = { verifyToken}
