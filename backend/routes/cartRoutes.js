const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { addToCart, getCart, deleteToCart }  = require("../controllers/cartController");

const router = express.Router();

router.get("/show", verifyToken, getCart); // 장바구니 확인 엔드포인트
router.post("/add", verifyToken, addToCart); // 장바구니 추가 엔드포인트
router.post("/delete", verifyToken, deleteToCart); // 장바구니 삭제 엔드포인트

module.exports = router;

