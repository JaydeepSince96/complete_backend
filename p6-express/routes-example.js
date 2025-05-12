const express = require("express");
const PORT = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("You'r on Home Page");
})

app.get("/products",(req,res)=>{
    let products = [
        {
            id:1,
            lable: " product1"
        },
        {
            id:2,
            lable: " product2"
        },
        {
            id:3,
            lable: " product3"
        }
    ]
    res.json(products)
})

app.get("/products/:id",(req,res)=>{
    const productId = parseInt(req.params.id)
    let products = [
        {
            id:1,
            lable: " product1"
        },
        {
            id:2,
            lable: " product2"
        },
        {
            id:3,
            lable: " product3"
        }
    ]
    const getSingleProduct = products.find(product=> product.id === productId)
    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{
        res.status(404).send("Product is not found")
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})