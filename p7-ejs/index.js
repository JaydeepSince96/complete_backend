const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.set("view engine", "ejs")

app.set("views",path.join(__dirname,"views"))

const products = [
    {
        id:1,
        title: "title 1"
    },
    {
        id:2,
        title: "title 2"
    },
    {
        id:3,
        title: "title 3"
    }
]

app.get("/",(req,res)=>{
    res.render("home",{title:"Home Title", product: products})
}),

app.get("/about",(req,res)=>{
    res.render("about",{title:"About Title"})
})

app.listen(PORT,()=>{
    console.log(`Server is listening on POrt: ${PORT}`)
})