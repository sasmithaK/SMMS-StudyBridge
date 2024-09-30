const express = require("express");
const Posts = require("../../Model/universityModel/model");
const User = require("../../Model/universityModel/user");
const router = express.Router();

router.post("/post/save", async (req, res) => {
  try {
    let newPost = new Posts(req.body);
    await newPost.save();
    res.status(200).json({
      success: "Post saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Posts.find(); // Fetch data from MongoDB
    res.status(200).json({
      success: true,
      existingPosts: posts, // Correct structure
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

router.put("/posts/update/:id", async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      success: "Updated Successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

router.delete("/posts/delete/:id", async (req, res) => {
  console.log(`Delete request received for ID: ${req.params.id}`);
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "University not found" });
    }
    console.log(`Successfully deleted post: ${post}`);
    res.status(200).json({ message: "University deleted successfully" });
  } catch (err) {
    console.error(`Error deleting post: ${err.message}`);
    res.status(400).json({ error: err.message });
  }
});

// Fetch a single post by ID
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    // If userName or password is missing, send a 400 Bad Request response
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }

  try {
    const user = await Posts.findOne({ userName, password });

    if (user) {
      // Login success
      return res
        .status(200)
        .json({ success: true, message: "Login successful" });
    } else {
      // Incorrect credentials
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
