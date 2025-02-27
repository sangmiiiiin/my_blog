const multer = require("multer");
const path = require("path");

// Multer 저장 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/"); // 이미지 저장 폴더
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // 파일명 중복 방지
    },
});

const upload = multer({ storage }).single("image");

// 업로드 처리 함수
const uploadImage = (req, res) => {
    console.log("📌 요청 도착: /upload");
    console.log("📌 업로드된 파일 정보:", req.file);

    if (!req.file) {
        console.error("❌ 파일 없음");
        return res.status(400).json({ message: "이미지 업로드 실패" });
    }

    res.json({ imageUrl: `http://192.168.10.102:5700/public/${req.file.filename}` });
};

module.exports = { upload, uploadImage };
