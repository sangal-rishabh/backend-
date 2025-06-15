const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../middleware/authentication');
router.post('/video',auth,videoController.uploadVideo);

router.get('/allvideo', videoController.getAllVideo);
router.get('/getVideoById/:id', videoController.getvedioById);
router.get('/:userId/channel', videoController.getAllvideoByUserID );

module.exports = router;