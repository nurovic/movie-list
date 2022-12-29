
const express = require("express") 
const router = express.Router()
const MoviesController = require("../controllers/MoviesController")

router.route("/").post(MoviesController.movieCreate)

module.exports = router