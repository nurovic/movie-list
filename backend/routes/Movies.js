
const express = require("express") 
const router = express.Router()
const MoviesController = require("../controllers/MoviesController")

router.route("/").post(MoviesController.index)

module.exports = router