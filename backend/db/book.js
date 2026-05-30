
const pool = require("./db.js");

async function allBooksData(id) {
    const { rows } = await pool.query(`
        SELECT 
            books.id,
            books.title as title,
            books.price as bookprice,
            authors.name as authorName,
            categories.name as category,
            books.description
            FROM books
            LEFT JOIN authors ON authors.id = books.author_id
            LEFT JOIN book_categories ON book_categories.book_id = books.id
            LEFT JOIN categories ON categories.id = book_categories.category_id
        `);
    return rows;
}

async function getBookId(id) {
    const { rows } = await pool.query("SELECT * FROM books WHERE id=$1",[id]);
    console.log(rows)
    return rows;
}

async function updateBook(id, bodyData) {
    const { title, description, price, stock, published_at } = bodyData;
    const { rows } = await pool.query(
    `UPDATE books SET title=$1, description=$2, price=$3, stock=$4, published_at=$5 WHERE id=$6`,
    [title, description, price, stock, published_at, id])
    return rows;
}

module.exports = {
    allBooksData,
    updateBook,
    getBookId
}