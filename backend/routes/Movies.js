
const express = require("express") 
const router = express.Router()
const MoviesController = require("../controllers/MoviesController")

router.route("/").post(MoviesController.index)
router.route("/").get(MoviesController.getAll)
router.route("/:id").delete(MoviesController.delete)

module.exports = router