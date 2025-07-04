const express = require("express");
const homeController = require("../controller/home-controller")
const authMiddleware = require("../middlewares/auth-middleware")

const router = express.Router()

router.get("/welcome",authMiddleware, homeController)

module.exports = router