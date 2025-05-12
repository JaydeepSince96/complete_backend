const express = require("express");
const adminController = require("../controller/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/role-middleware")

const router = express.Router()

router.get("/admin", authMiddleware, adminMiddleware, adminController)

module.exports = router