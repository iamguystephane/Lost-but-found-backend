require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Item = require("../models/Item");

router.get("/get-lost-items", async (req, res) => {
  try {
    const items = await Item.find({ status: "lost" }).populate("postedBy");
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching lost items:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
