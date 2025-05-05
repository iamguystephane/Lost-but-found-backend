const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middleware/auth");

router.get("/get-items", auth, async (req, res) => {
  const userId = req.user?.id;
  console.log("Getting user item for: ", userId)
  try {
    const items = await Item.find({ postedBy: userId });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
