//
const router = require('express').Router();
const userController = require("../controller/UserController")
router.get("/users",userController.getUsers)
router.get("/users/:id",userController.getUserById)
router.post("/users",userController.addUser)
module.exports = router;