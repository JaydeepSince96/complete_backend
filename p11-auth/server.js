require("dotenv").config()
const express = require("express");
const app = express();
const connectToDb = require("./database/db")
const authRoutes = require("./routes/auth-routes")
const homeRoutes = require("./routes/home-route")
const adminRoutes = require("./routes/admin-route")
const uploadImageRoutes = require("./routes/image-route")


const PORT = process.env.PORT || 4000;
connectToDb()

app.use(express.json())

app.use("/api/routes",authRoutes)
app.use("/api/routes",homeRoutes)
app.use("/api/routes",adminRoutes)
app.use("/api/routes",uploadImageRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})

