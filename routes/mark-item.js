const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require('../middleware/auth');

router.put("/mark-item", auth, async (req, res) => {
  try {
    const { itemId } = req.body;
    if (!itemId)
      return res.status(400).json({ message: "Item ID is required" });
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });
    item.status = item.status === "lost" ? "notlost" : "lost";
    await item.save();
    res.status(200).json({ message: "Item status updated successfully" });
  } catch (err) {
    console.log("Error marking item: ", err);
  }
});

module.exports = router;
