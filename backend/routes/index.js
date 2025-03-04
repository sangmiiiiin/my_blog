const express = require("express");

const authRoutes = require("./authRoutes");
const postRoutes = require("./postRoutes");
const uploadRoutes = require("./uploadRoute");

const router = express.Router();

router.use("/posts", postRoutes);  // 블로그 API 엔드포인트
router.use("/auth", authRoutes); // 회원가입 & 로그인 API 추가
router.use("/upload", uploadRoutes);  // 업로드 API 추가

module.exports = router;