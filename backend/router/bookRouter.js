const express = require("express");
const bookController  = require("../controller/bookController");
const router = express.Router();


router.get('/',bookController.allBooks);
router.put('/edit/:id',bookController.updateBookController);
router.get('/edit/:id',bookController.getBookById);





module.exports = router;
