const pool = require("./db.js");


async function getAuthors() {
    const { rows } = await pool.query('SELECT * FROM authors');
    return rows;
}
async function allAuthorBooks() {
    const { rows } = await pool.query(`
    SELECT 
        books.title as bookTitle,
        books.description as description,
        authors.name as authorName
        FROM books
        LEFT JOIN authors ON authors.id = books.author_id
    `);
    return rows
}
module.exports = {
    getAuthors,
    allAuthorBooks,
}