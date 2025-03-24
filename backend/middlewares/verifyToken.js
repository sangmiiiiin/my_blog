const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "인증 필요" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
        req.user = decoded; // 유저 정보 저장
        next();
    } catch (error) {
        return res.status(401).json({ isAuthenticated: false });
    }
};


module.exports = verifyToken;