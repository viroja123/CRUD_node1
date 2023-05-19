const express = require('express');
const router = express.Router();
const postController = require('../controller/post_controller');

router.post('/posts', postController.createPost);


module.exports = router;
