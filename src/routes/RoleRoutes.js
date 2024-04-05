const router = require('express').Router();
const roleController = require('../controller/RoleController');
router.post("/role", roleController.createRole);
router.get("/role", roleController.getRoles);
module.exports = router;