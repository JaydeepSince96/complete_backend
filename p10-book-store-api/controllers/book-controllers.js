
const book = require("../models/book");

const getAllBooks = async (req,res)=>{
 try {
    const getAllBooks = await book.find();
    if(getAllBooks.length > 0){
       res.status(201).json({
           success: true,
           message: "all the booked fetched successfully",
           data: getAllBooks,
       })
    }else{
       res.status(404).json({
           message: "book is not not available"
       })
    }
 } catch (error) {
    res.status(501).json({
        success: false,
        message: `Something went wrong, Please try again ${error}`
    })
 }
}

const getSingleBook = async (req,res)=>{
    try {
        const singleBook = req.params.id
        const getBookById = await book.findById(singleBook)
        if(getBookById){
            res.status(201).json({
                success: true,
                message: `Get book for id ${singleBook}`,
                data: getBookById,
            })
        }else{
            res.status(404).json({
                message: "book is not not available"
            })
         }
        }
        
     catch (error) {
        res.status(501).json({
            success: false,
            message: `Something went wrong, Please try again ${error}`
        })
     }
    }


const addBook = async (req,res)=>{
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({
                success: true,
                message: "Book Added Sucessfully",
                data: newBookFormData
            })
        }else{
            res.status(404).json({
                message: "book is not not available"
            })
        }
        
    } catch (error) {
        console.log(error)
    }
    
}

const updateBook = async (req,res)=>{
    try {
        const updateBookFormData = req.body;
        const updatedBookId =req.params.id;
        const updateBook = await book.findByIdAndUpdate(updatedBookId, updateBookFormData, {
            new:true
        })
        if(updateBook){
            res.status(201).json({
                success: true,
                message: "Book Updated Sucessfully",
                data: updateBook,
            })
        }else{
            res.status(404).json({
                message: "book is not not available"
            })
        }
    } catch (error) {
        res.status(501).json({
            success: false,
            message: `Something went wrong, Please try again ${error}`
        })
    }
 
}

const deleteBook = async (req,res)=>{
    try {
        const deleteBookId = req.params.id;
        const deletedById = await book.findByIdAndDelete(deleteBookId);
        if(deletedById){
            res.status(201).json({
                success: true,
                message: `Book deleted of id ${deleteBookId}`,
                data: deletedById
            })
        }
        
    } catch (error) {
        res.status(501).json({
            success: false,
            message: `Something went wrong, Please try again ${error}`
        })
    }
    
}

module.exports = {getAllBooks,getSingleBook,addBook,updateBook,deleteBook}