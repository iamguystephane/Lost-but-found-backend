require("dotenv").config();
const express = require("express");
const connectDB = require("./scripts/connectMongoDB");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protected"));
app.use("/api", require("./routes/loggedinUser"));
app.use("/api", require("./routes/get-lost-items"));
app.use("/api", require("./routes/get-user-items"));
app.use("/api", require("./routes/post-items"));
app.use('/api', require("./routes/mark-item"));
app.get("/api", (req, res) => res.send("<h1> Found me </h1>"));

app.get("/", (req, res) => {
  res.send("<h1> Hey there, welcome to our lost but found app ✌ </h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
