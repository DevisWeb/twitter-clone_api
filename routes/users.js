const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/me", usersControllers.getMe);
router.get("/:id", usersControllers.getById);
router.get("/", usersControllers.getAll);

module.exports = router;
