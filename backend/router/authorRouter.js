const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController.js");

router.get("/",authorController.getAllAuthors);



module.exports = router;