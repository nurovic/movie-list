
const express = require("express") 
const router = express.Router()
const CourseController = require("../controllers/CourseController")

router.route("/").post(CourseController.create)
router.route("/").get(CourseController.getAll)

module.exports = router