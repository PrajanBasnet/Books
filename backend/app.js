    const express = require("express");
    const app = express();
    const dashboardRouter = require('./router/dashboardRouter');
    const bookRouter = require('./router/bookRouter.js');
    const authorRouter = require('./router/authorRouter.js');
    const  cors =  require('cors');
    

    require('dotenv').config();
    const PORT = process.env.PORT || 5000;
    app.use(cors({
    origin: 'http://localhost:5173' // your Vite frontend URL
}))

    app.use(express.json());
    app.use('/api/dashboard',dashboardRouter);
    app.use('/api/books',bookRouter);
    app.use('/api/authors',authorRouter);

    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });