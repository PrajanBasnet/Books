const { getAllBooks,totalAuthor,totalBooks,totalCategories } = require("../db/dashDb")

async function dashboard(req,res){

    try {   
        const [books,totalBookCount, totalAuthorCount,totalCategoriesCount ] = await
        Promise.all([getAllBooks(),totalBooks(),totalAuthor(),totalCategories()]);

        res.status(200).json({
            success:true,
            books: books,
            stats:{
                totalBook: totalBookCount,
                totalAuthor: totalAuthorCount,
                totalCategories: totalCategoriesCount,
            }
        })
    } catch (err) {
        console.log("Error on dashbaord controller ", err);

        res.stats(500).json({status:false, message:"Error on fetching controller "});
    }
}

module.exports = {
    dashboard,
}