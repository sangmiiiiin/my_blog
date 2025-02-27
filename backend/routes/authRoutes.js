const express = require("express");
const { registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser); // 회원가입 엔드포인트

module.exports = router;

