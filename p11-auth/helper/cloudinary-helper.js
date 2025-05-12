const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filepath) => {
    try {
        const result = await cloudinary.uploader.upload(filepath)
        return{
            url: result.secure_url,
            public_id: result.public_id
        }
        
    } catch (error) {
        console.error("Error Occurred while uploading files", error)
        throw new Error("Error in uploading file.")
    }
}

module.exports = uploadToCloudinary