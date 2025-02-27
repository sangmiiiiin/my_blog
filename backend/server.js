const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectToDatabase = require("./config/db");

const uploadRoutes = require("./routes/uploadRoute");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectToDatabase();  // MongoDB 연결

const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);  // 블로그 API 엔드포인트
app.use("/auth", authRoutes); // 회원가입 & 로그인 API 추가
app.use("/upload", uploadRoutes);  // 업로드 API 추가
app.use("/public", express.static("public"));  // 정적 파일 제공

app.use("/public", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log(`📌 요청: ${req.method} ${req.url}`);
    next();
});

const PORT = process.env.PORT || 5700;
app.listen(PORT, () => {
    console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
