const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectToDatabase = require("./config/db");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");

dotenv.config();
connectToDatabase();  // MongoDB 연결

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000", // 프론트엔드 주소
        credentials: true, // 쿠키 포함 허용
    })
);
app.use(express.json());
app.use(cookieParser());

// ✅ 라우트 통합 적용
app.use("/", routes); 

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
