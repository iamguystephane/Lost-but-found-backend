require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./app/scripts/connectMongoDB");
const app = express();

connectMongoDB();

app.get("/", (req, res) => {
  res.send(
    "<h1> Hello world, welcome to our lost but found app backend! </h1>"
  );
});

app.listen(5000, () => {
  console.log("server is running on port 5000 at http://localhost:5000");
});
