const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/bookStoreApi', {
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };

  // User Schemas
  const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive: Boolean,
    tag: [String]
  })

  // User Model

  const User = mongoose.model("User",userSchema)

  async function RunQueryExamples(){
    await connectDB()
    try {
        const user = await User.create({
            name:"Jaydeep",
            email:"jay@test.com",
            age:29,
            isActive: true,
            tag: ["jay", "good","boy"],
            createdAt: {type: Date,default:Date.now}
        })
        console.log("created new User",user)
    } catch (error) {
        console.log(error)
    } finally{
        await mongoose.connection.close()
    }
  }

  RunQueryExamples()