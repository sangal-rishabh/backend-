const express = require('express');
const router = express.Router();

const usercontroller = require('../Controllers/user');
router.post("/signup",usercontroller.signup)
router.post("/login",usercontroller.signIn)
router.post("/logout",usercontroller.logout)
module.exports = router;