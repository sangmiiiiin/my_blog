const logoutUser = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        path: "/",
    });
    res.json({ message: "로그아웃 성공" });
};

module.exports = { logoutUser };