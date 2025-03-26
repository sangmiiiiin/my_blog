const express = require("express");
const { registerUser } = require("../controllers/authController");
const { loginUser } = require("../controllers/loginController");
const { authCheckUser } = require("../controllers/authCheckController");
const verifyToken = require("../middlewares/verifyToken");
const { logoutUser } = require("../controllers/logoutController");

const router = express.Router();

router.post("/register", registerUser); // 회원가입 엔드포인트
router.post("/login", loginUser); // 로그인 엔드포인트
router.get("/check", verifyToken, authCheckUser); // 토큰확인 엔드포인트
router.post("/logout", logoutUser); // 로그아웃 엔드포인트

module.exports = router;

