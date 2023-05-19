const Post = require('../models/Post');

const createPost = async (req, res) => {
  try {
    const { title, body, active } = req.body;
    const createdBy = req.user._id;
    const post = new Post({
      title,
      body,
      createdBy
    });
    await post.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error('Post creation error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



module.exports = { createPost };
