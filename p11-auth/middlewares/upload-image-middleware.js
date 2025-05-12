const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"upload/")
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

//Check whether it is image or not.

const checkFileFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(new Error("Not a image, please upload image"))
    }
}

module.exports = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: {
        fileSize: 5*1024*1024 // 5 mb
    }
})