const express = require("express");
const { upload, uploadImage } = require("../controllers/uploadController");

const router = express.Router();

router.post("/", upload, uploadImage); // 업로드 요청 처리

module.exports = router;
