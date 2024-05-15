const router = require('express').Router();
const uploadController = require('../controller/UploadController');
router.post('/upload', uploadController.uploadFile);
module.exports = router;