require("dotenv").config()
const express = require("express");
const connectDb = require("./database/db")
const bookRoutes = require("./routes/book-routes")


const app = express()
const PORT = process.env.PORT || 3000;

// express.json() middleware always should be before than route middleware
app.use(express.json());

app.use("/api/books",bookRoutes)

connectDb()

app.listen(PORT,()=>{
    console.log(`Server is listening on Port : ${PORT}`)
})