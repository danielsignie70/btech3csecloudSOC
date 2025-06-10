const express = require('express');
const router = express.Router();
const Comment = require('C:\Users\danie\OneDrive\Desktop\SANDJONG SIGNIE DANIEL AUBIN\backend\Models\Comment');

// Post a comment (POST)
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;