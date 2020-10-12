const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

//logger
app.use(morgan("tiny"));

//modular routes
app.use("/api", require("./routes/api"));

app.listen(port, () =>
console.log(chalk.black.bgWhite.bold(`Listening on port ${port}`))
);