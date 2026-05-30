const { allBooksData, updateBook,getBookId } = require("../db/book")

async function allBooks(req,res) {
    try {
        const books = await allBooksData();
        res.status(200).json({books:books})
    } catch (err) {
        console.error(err);
           res.status(500).json({ message: "Server error" });
    }
}

async function getBookById(req,res) {
        try {
        const books = await getBookId(req.params.id);
        res.status(200).json({books:books})
    } catch (err) {
        console.error(err);
           res.status(500).json({ message: "Server error while fetching" });
    }
}

async function updateBookController(req,res) {
    try {
        const  bodyData = req.body;
        const data = await updateBook(req.params.id,bodyData);
        res.status(200).json({data:data,message:'success'})
    } catch (err) { 
        console.log(err,"there was an error in fetching");
            res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    allBooks,
    getBookById,
    updateBookController
}