const messages = require("../models/messages");

const messagesController = {
  getAll: async (_, res) => {
    try {
      const dbResult = await messages.find({});
      res.json({
        code: 200,
        operation: "success",
        description: "Messages data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getById: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const dbResult = await messages.find({ _id: id });
      res.json({
        code: 200,
        operation: "success",
        description: "Messages data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getByUserId: async (req, res) => {
    const {user_id }= req.params;
    try {
      const dbResult = await messages.find({ user_id });
      res.json({
        code: 200,
        operation: "success",
        description: "Messages data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  
};
module.exports = messagesController;
