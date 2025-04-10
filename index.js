require("dotenv").config();
const express = require("express");
const path = require("path");
const connectMongoDB = require("./app/scripts/connectMongoDB");
const app = express();

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(5000, () => {
  console.log("server is running on port 5000 at http://localhost:5000");
});
