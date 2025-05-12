const uploadToCloudinary = require("../helper/cloudinary-helper")
const Image = require("../models/image")
const User = require("../models/user")

const imageController = async(req, res)=>{
    try {
        if(!req.file){
           return res.status(401).json({
            success: false,
            message: "Image is missing please upload the image"
           })
        }
        const {url, public_id} = await uploadToCloudinary(req.file.path)
        
        // Find the user by email to get their ObjectId
        const user = await User.findOne({ email: req.userInfo.email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const newlyUploadFile = new Image({
            url,
            publicId: public_id,
            uploadBy: user._id  // Use the user's ObjectId
        })
        await newlyUploadFile.save()
        return res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: newlyUploadFile
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Something went wrong ${error}`
        })
    }
}

const getAllImage = async(req, res)=>{
    try {
        const getImages = await Image.find({})
        if(getImages){
            res.status(200).json({
                success: true,
                message: "Images fetched successfully",
                images: getImages
            })
        }else{
            res.status(404).json({
                success: false,
                message: "No images found"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error occurred while fetching images: ${error}`
        })
    }
}

module.exports = {imageController, getAllImage};