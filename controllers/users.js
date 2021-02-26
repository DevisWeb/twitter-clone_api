const users = require("../models/users");

const usersController = {
  getMe: async (_, res) => {
    try {
      const dbResult = await users.aggregate([{ $sample: { size: 1 } }])
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
    const id = req.params.id;

    try {
      const dbResult = await users.find({ _id: id });
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
