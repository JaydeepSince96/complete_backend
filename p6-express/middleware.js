const express = require("express");
const app = express();
const PORT = 3000;


const GetTimeStampOnEveryRequest= (req,res,next)=>{
    const timeStamp = new Date().toISOString()
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(GetTimeStampOnEveryRequest);

app.get("/",(req,res)=>{
    res.send("You'r on Home Page");
})
app.get("/about",(req,res)=>{
    res.send("You'r on About Page");
})
app.get("/contact",(req,res)=>{
    res.send("You'r on Contact Page");
})

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})