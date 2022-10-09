const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();
router.post("/Registration", userController.addUser);

module.exports = router;
