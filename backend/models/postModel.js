const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    originalPrice: Number,
    salePrice: Number,
    size: String,
    color: String,
    detailContent: String,
    thumbnail: String,
    description: String,
    link: String,
    createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;