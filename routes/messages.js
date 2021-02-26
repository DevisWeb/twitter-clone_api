const express = require("express");
const router = express.Router();

const messagesControllers = require("../controllers/messages");

//redirect from root page to /messages

router.get("/", (_, res) => {
  res.redirect("/messages");
});

router.get("/messages/", messagesControllers.getAll);
router.get("/messages/:id", messagesControllers.getById);

module.exports = router;
