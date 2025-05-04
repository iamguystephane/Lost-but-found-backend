

const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.post("/post-items", async (req, res) => {
  const formData = req.body;
  const userId = req.user?.id;
  if(!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const item = new Item({...formData, postedBy: userId});
    await item.save();
    res.status(201).json({ message: "Item saved successfully", item });
  } catch (error) {
    console.error("Error saving item:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
