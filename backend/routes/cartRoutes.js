const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { addToCart, getCart }  = require("../controllers/cartController");

const router = express.Router();

router.get("/show", verifyToken, getCart); // 장바구니 확인 엔드포인트
router.post("/add", verifyToken, addToCart); // 장바구니 추가 엔드포인트

module.exports = router;

