const jwt = require("jsonwebtoken");
const secret = "samir";

const generateToken = (userObj) => {
  const token = jwt.sign(userObj, secret,{
    expiresIn: "100d"
  });
  return token;
};

module.exports = { generateToken };