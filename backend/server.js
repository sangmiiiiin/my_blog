const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const connectToDatabase = require("./config/db");

dotenv.config();
connectToDatabase();  // MongoDB 연결

const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);  // 블로그 API 엔드포인트

const PORT = process.env.PORT || 5700;
app.listen(PORT, () => {
    console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
