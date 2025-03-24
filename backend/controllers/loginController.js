// backend/controllers/authController.js
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 로그인 컨트롤러
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // 1️⃣ 사용자 찾기
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "존재하지 않는 이메일입니다." });
        }

        // 2️⃣ 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "비밀번호가 올바르지 않습니다." });
        }

        // 3️⃣ JWT 토큰 생성
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1h" }
        );

        // 4️⃣ HttpOnly 쿠키로 JWT 저장
        res.cookie("token", token, {
            httpOnly: true, // JavaScript에서 접근 불가
            secure: true,   // HTTPS에서만 전송 (개발 환경에서는 false 가능)
            sameSite: "Strict", // CSRF 방지
            maxAge: 60 * 60 * 1000 // 1시간 (밀리초 단위)
        });

        res.json({ 
            message: "로그인 성공!", 
            token,
            user: { id: user._id, username: user.username, email: user.email } 
        });
    } catch (error) {
        console.error("로그인 오류:", error);
        res.status(500).json({ message: "서버 오류 발생" });
    }
};

module.exports = { loginUser };
