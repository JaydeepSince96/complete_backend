const express = require("express");
const {registerUser, loginUser,getUsers, forgetPassword} = require("../controller/auth-controller")

const router = express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/users",getUsers)
router.post("/forget-password",forgetPassword)

module.exports = router