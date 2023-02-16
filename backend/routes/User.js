const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { check } = require("../middleware/auth");

router.route("/create").post(UserController.createUser);
router.route("/login").post(UserController.login);
router.route("/me").get(check, UserController.getMe);

module.exports = router;
