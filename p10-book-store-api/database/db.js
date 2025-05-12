const mongoose = require("mongoose");

const connectDb = async ()=>{
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookStore")
    console.log("connected to mongo db")
  } catch (error) {
    console.log("Error in connection",error)
    process.exit(1)
  }
}

module.exports = connectDb;