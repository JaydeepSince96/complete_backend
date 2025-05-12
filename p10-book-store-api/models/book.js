const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxlength: [20, "Title length can not be more than 20"],
        trim: true,
    },
    auther:{
        type: String,
        required: [true, "Auther Name is required"],
        trim: true,
    },
    year:{
        type: Number,
        min: [1000, "Atlest book should be 1000 years ol"],
        max : [new Date().getFullYear(), "Dates can not be from futures"],
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)