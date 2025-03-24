const authCheckUser = (req, res) => {
    res.json({
        isAuthenticated: true,
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });
};

module.exports = { authCheckUser };