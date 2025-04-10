const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    originalPrice: Number,
    salePrice: Number,
    detailContent: String,
    thumbnail: String,
    description: String,
    link: String,
    category: String,
    options: {
        sizes: [String],
        colors: [String],
    },
    createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;