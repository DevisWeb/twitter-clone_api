const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/users", usersControllers.getAll);
router.get("/users/:id", usersControllers.getById);
router.get("/users/:id/messages", usersControllers.getUserMessages);

module.exports = router;
