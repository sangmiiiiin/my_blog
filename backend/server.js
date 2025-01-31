const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    res.send("Express 서버가 정상적으로 실행 중 입니다!");
});

const PORT = 5700;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행중!`);
})

mongoose.connect("mongodb://localhost:27017/myDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB 연결 성공!"))
    .catch(err => console.error("❌ MongoDB 연결 실패:", err));