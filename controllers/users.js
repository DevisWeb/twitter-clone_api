const users = require("../models/users");

const usersController = {
  getAll: async (_, res) => {
    try {
      const dbResult = await users.find({});
      res.json({
        code: 200,
        operation: "success",
        description: "User data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const dbResult = await users.find({ id });
      res.json({
        code: 200,
        operation: "success",
        description: "User data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },

  getUserMessages: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const dbResult = await users.find({ id });
      res.json({
        code: 200,
        operation: "success",
        description: "User data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};
module.exports = usersController;
