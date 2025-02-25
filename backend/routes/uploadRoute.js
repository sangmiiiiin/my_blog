const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// 저장 경로 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/"); // 이미지 저장 폴더
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // 파일명 중복 방지
    },
});

const upload = multer({ storage });

// 이미지 업로드 API
router.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "이미지 업로드 실패"});
    }
    res.json({ imageUrl: `/public/${req.file.filename}` });
});

module.exports = router;