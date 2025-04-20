const express = require("express");
const { addToCart } = require("../controllers/cartController");

const router = express.Router();

router.get("/show"); // 장바구니 확인 엔드포인트
router.post("/add", addToCart); // 장바구니 추가 엔드포인트

module.exports = router;

