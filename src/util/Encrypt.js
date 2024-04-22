const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("hashed password", hashedPassword);

  return hashedPassword;
};

const comparePassword = async (password, hashPassword) => {
  const isMatch = await bcrypt.compare(password, hashPassword);
  console.log("isMatch", isMatch);
  return isMatch;
};
module.exports = { encryptPassword, comparePassword };

//encryptPassword("123456");
// comparePassword("123456","$2b$10$sCHgBzfhfaktamFsco8MRe5VlaxhAORFezMcYLCIrN3CRRyQ4TmPO")
