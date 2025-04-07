require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./app/scripts/connectMongoDB");
const app = express();

connectMongoDB();

app.get("/", (req, res) => {
  res.send(
    "<ul><li> Games </li> <li> Coding </li> <li> Movies and Games </li></ul>"
  );
});

app.listen(5000, () => {
  console.log("server is running on port 5000 at http://localhost:5000");
});
