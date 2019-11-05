const chalk = require("chalk");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
// Models
const User = require("./models/user");
// Routes
const { userRoute } = require("./routes");
// env
require("dotenv").config();

const app = express();

const hostname = "localhost";
const port = 8888;

app.use(express.static(path.join(__dirname, "../front-end/build")));

// Mongodb Connect
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log(chalk.bgRed("Connected mongod server!"));
});
mongoose.connect(`mongodb://localhost:27017/blog`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Routes
userRoute(app, User);

app.listen(port, hostname, () => {
  console.log(chalk.cyan(`Server running ap http://${hostname}:${port}`));
});
