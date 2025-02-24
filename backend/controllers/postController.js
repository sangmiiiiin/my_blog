const Post = require("../models/postModel");

// 모든 글 조회
exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

// 특정 글 조회
exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json(post);
};

// 새 글 생성
exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
};

// 글 수정
exports.updatePost = async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json(updatedPost);
};

// 글 삭제
exports.deletePost = async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json({ message: "삭제 완료!" });
};
