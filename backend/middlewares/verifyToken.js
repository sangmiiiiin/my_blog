const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "인증 필요" });

    jwt.verify(token, process.env.JWT_SECRET || "secretkey", (err, decoded) => {
        if (err) return res.status(403).json({ message: "유효하지 않은 토큰" });

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;