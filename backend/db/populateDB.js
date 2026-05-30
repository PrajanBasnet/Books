const { Client } = require("pg");

const client = new Client();

const SQL = `
    CREATE TABLE IF NOT EXISTS authors(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title  VARCHAR(255),
    description TEXT,
    published_at DATE,
    price DECIMAL(10,2),
    stock INTEGER,
    author_id INTEGER REFERENCES authors(id) ON DELETE SET NULL
    
    );


    CREATE TABLE IF NOT EXISTS categories(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS book_categories(
        book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
        category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
        PRIMARY KEY(category_id, book_id)
    );

INSERT INTO authors (name)
VALUES
    ('J.K. Rowling'),
    ('George Orwell'),
    ('Robert C. Martin'),
    ('Yuval Noah Harari');


INSERT INTO categories (name)
VALUES
    ('Fantasy'),
    ('Science Fiction'),
    ('Programming'),
    ('History'),
    ('Drama');




INSERT INTO books (
    title,
    description,
    published_at,
    price,
    stock,
    author_id
)
VALUES
(
    'Harry Potter and the Philosopher''s Stone',
    'Fantasy novel about a young wizard.',
    '1997-06-26',
    19.99,
    50,
    1
),
(
    '1984',
    'Dystopian novel about totalitarian society.',
    '1949-06-08',
    14.50,
    30,
    2
),
(
    'Clean Code',
    'A handbook of agile software craftsmanship.',
    '2008-08-01',
    39.99,
    20,
    3
),
(
    'Sapiens',
    'Book about the history of humankind.',
    '2011-01-01',
    24.99,
    15,
    4
);




INSERT INTO book_categories (book_id, category_id)
VALUES
    (1, 1), 
    (2, 2), 
    (2, 5), 
    (3, 3), 
    (4, 4); 
`

async function seedingDb() {
    
    const client = new Client({
           connectionString: process.env.DATABASE_URL || "postgresql://pablo:root@localhost:5432/bookvault",
           ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
    })
    console.log("Seeding...");
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done..")
    

}
seedingDb();