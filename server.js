const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users");
const messagesRoute = require("./routes/messages");

// environment
dotenv.config();

// mongo db connect
mongoose.connect(process.env.MONGODB_URL);

const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

// setting up the cors config
app.use(cors());
app.use(express.json()); // body-parser middleware

app.use("/users/", usersRoute);
app.use("/", messagesRoute);

app.listen(PORT, () => console.log(`web server is running on port ${PORT}`));
