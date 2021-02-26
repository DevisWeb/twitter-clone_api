const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/", usersControllers.getAll);
router.get("/:id", usersControllers.getById);
router.get("/:id/messages", usersControllers.getUserMessages);

module.exports = router;
