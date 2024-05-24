//
const router = require('express').Router();
const userController = require("../controller/UserController")
const authMiddleware = require("../middleware/AuthMiddleware")
router.get("/users",authMiddleware.verifyToken,userController.getUsers)

router.get("/users/:id",userController.getUserById)
router.get("/usersbystatus/:status",userController.getUsersByStatus)

router.post("/users",userController.addUser)
router.delete("/users/:id",userController.deleteUser)
router.put("/users/:id",userController.upadteUser)
router.put("/archiveuser/:id",userController.archiveUser)
router.put("/addskill/:id",userController.addSkill)
router.put("/removeskill/:id",userController.removeSkill)
router.post("/verifyuser",userController.verifyUser)
router.post("/login",userController.loginUser)
module.exports = router;