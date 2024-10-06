const express = require("express");
const routes = require("./routes/index");
const path = require("path");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

module.exports = app;
//revise exports
