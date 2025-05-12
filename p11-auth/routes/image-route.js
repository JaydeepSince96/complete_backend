const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/role-middleware")
const uploadMiddleware = require("../middlewares/upload-image-middleware")
const { imageController, getAllImage } = require("../controller/image-controller")

const router = express.Router()

router.post("/upload", authMiddleware, adminMiddleware, uploadMiddleware.single("image"), imageController)
router.get("/get-images", authMiddleware, getAllImage)

module.exports = router