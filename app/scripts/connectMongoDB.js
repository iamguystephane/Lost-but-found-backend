
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = connectMongoDB;