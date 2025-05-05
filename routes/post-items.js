const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middleware/auth");

router.post("/post-items", auth, async (req, res) => {
  const formData = req.body;
  console.log("Form data received:", formData);
  const userId = req.user?.id || req.user?.id; // Extract user ID from the token
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const item = new Item({ ...formData, postedBy: userId });
    await item.save();
    res.status(201).json({ message: "Item saved successfully", item });
  } catch (error) {
    console.error("Error saving item:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
