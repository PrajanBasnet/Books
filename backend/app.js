const express = require("express");
const app = express();
const dashboardRouter = require('./router/dashboardRouter');
const bookRouter = require('./router/bookRouter.js');
const authorRouter = require('./router/authorRouter.js');
const cors = require('cors');


require('dotenv').config();
const PORT = process.env.PORT || 5000;


const allowedOrigins = [
    'http://localhost:5173',
    'https://booksvaultprajan.onrender.com'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(express.json());
app.use('/api/dashboard', dashboardRouter);
app.use('/api/books', bookRouter);
app.use('/api/authors', authorRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});