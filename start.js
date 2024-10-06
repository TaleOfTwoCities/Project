require("dotenv").config();
require('./models/Registration')

const mongoose = require("mongoose");
const app = require("./app");

const server = app.listen(4000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

mongoose.connect(process.env.DATABASE);
mongoose.promise = global.promise;
mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection is open on ${process.env.DATABASE}`);
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

