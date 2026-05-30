const { getAuthors , allAuthorBooks} = require("../db/authorDb");


async function getAllAuthors(req,res){
    try {
        const result = await allAuthorBooks();
        res.status(200).json({result:result,message:"success on fetching"});
    } catch (err) {
        console.error("Error in Authorcontroller",err);
        res.status(500).json({message:"there was an Error"});
    }
}

module.exports = {
    getAllAuthors,
}