const express = require("express");
const app = express()
const PORT = 3000;

app.use(express.json())

const dummyBooks = [
    {
        id:1,
        book: "book 1"
    },
    {
        id:2,
        book: "book 2"
    },
    {
        id:3,
        book: "book 3"
    }
]

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to our book Store API"
    })
})

app.get("/get-book",(req,res)=>{
    res.json(dummyBooks)
})

app.get("/get-book/:id",(req,res)=>{
    const singleBook = dummyBooks.find(item=>item.id === parseInt(req.params.id))
    if(singleBook){
        res.status(200).json(singleBook)
    }else{
        res.status(404).json(
            {message: "Book is not found"}
        )
    }
    
})

// Create new book

app.post("/add",(req,res)=>{
    const newBook = {
        id: dummyBooks.length + 1,
        book: `Book ${dummyBooks.length + 1}`
    }
    dummyBooks.push(newBook);
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully"
    })
})

//Update a particular book

app.put("/get-book/:id",(req,res)=>{
    const findCurrentBook = dummyBooks.find(item => item.id === parseInt(req.params.id))
    if(findCurrentBook){
        findCurrentBook.book = req.body.book || findCurrentBook.book;
        res.status(200).json({
            message: `Book with ID ${parseInt(req.params.id)} added successfully`,
            data: findCurrentBook
        })
    }else{
        res.status(400).json({
            message: `Books is not found`
        })
    }
})

// Delete a particular book;

app.delete("/get-book/:id",(req,res)=>{
    const bookToDelete = dummyBooks.findIndex(item=>item.id === parseInt(req.params.id))
    if(bookToDelete !== -1){
       const deletedBook = dummyBooks.splice(bookToDelete,1)
        res.status(200).json({
            message: `Book of ID ${parseInt(req.params.id)} deleted successfully`,
            data: deletedBook[0]
        })
    }else{
        res.status(404).json({
            message: "Book is not found"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})