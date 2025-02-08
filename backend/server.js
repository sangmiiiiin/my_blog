// backend / server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB 연결
// mongoose.connect("mongodb://localhost:27017/blogDB", {
//           useNewUrlParser: true,   
//           useUnifiedTopology: true 
// }).then(() => console.log("✅ MongoDB 연결 성공!"))
// .catch(err => console.error("❌ MongoDB 연결 실패:", err));

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blogDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB 연결 성공!");
    } catch (err) {
        console.error("❌ MongoDB 연결 실패:", err);
    }
};

connectToDatabase();

// 블로그 글 스키마 및 모델 정의
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    thumbnail: String,
    description: String,
    link: String,
    createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model("Post", postSchema);

// 1️⃣ 모든 글 조회 (GET /posts)
app.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// try catch 문으로 예외처리 하여 올바르지 않은 요청에도 서버가 종료되지 않도록 할 것.

// 2️⃣ 특정 글 조회 (GET /posts/:id)
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json(post);
});

// 3️⃣ 새 글 생성 (POST /posts)
app.post("/posts", async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

// 4️⃣ 글 수정 (PUT /posts/:id)
app.put("/posts/:id", async (req, res) => {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatePost) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json(updatedPost);
});

// 5️⃣ 글 삭제 (DELETE /posts/:id)
app.delete("/posts/:id", async (req, res) => {
    const deletedPost = await Post.findOneAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).send("글을 찾을 수 없습니다.");
    res.json({ message: "삭제 완료!" });
});

const PORT = 5700;
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행중!`);
})
