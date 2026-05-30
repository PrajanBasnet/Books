const pool = require("./db.js");

async function getAllBooks() {
    const { rows } = await pool.query("SELECT * FROM books");
    return rows;
}
async function totalBooks() {
    const { rows } = await pool.query("SELECT COUNT(*)::INTEGER FROM books");
    return rows[0].count;
}

async function totalAuthor() {
    const { rows } = await pool.query("SELECT COUNT(*)::INTEGER FROM authors");
    return rows[0].count;
}

async function totalCategories() {
    const { rows } = await pool.query("SELECT COUNT(*)::INTEGER FROM categories");
    return rows[0].count;

}

module.exports = {
    getAllBooks,
    totalAuthor,
    totalBooks,
    totalCategories
}

