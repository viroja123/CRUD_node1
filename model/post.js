const mongoose = require('mongoose');
require('./server.js');


const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
 
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
