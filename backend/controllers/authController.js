const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// 회원가입 컨트롤러
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
         // 1️⃣ 기존 사용자 확인 (중복 체크)
        

        // 2️⃣ 새로운 사용자 생성
        const newUser = new User({ username, email, password });

        // 3️⃣ MongoDB 저장
        await newUser.save();

        // 4️⃣ 응답 반환 (비밀번호 제외)
        res.status(201).json({
            message: "회원가입 성공!",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            }
        });
        } catch (error) {
            console.error("회원가입 오류", error);
            res.status(500).json({ message: "서버 오류 발생" });
        }
};

module.exports = { registerUser };