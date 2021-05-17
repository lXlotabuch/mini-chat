const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  message: String,
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
