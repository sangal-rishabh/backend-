const express = require('express');
const router = express.Router();
const commentControllers = require('../Controllers/comment');
const auth = require('../middleware/authentication');


router.post('/comment',auth, commentControllers.addComment);
router.get('/comment/:videoId',commentControllers.getcommentByvideoId);
module.exports = router;