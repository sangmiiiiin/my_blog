const express = require("express");
const { registerUser } = require("../controllers/authController");
const { loginUser } = require("../controllers/loginController");

const router = express.Router();

router.post("/register", registerUser); // 회원가입 엔드포인트
router.post("/login", loginUser); // 로그인 엔드포인트

module.exports = router;

