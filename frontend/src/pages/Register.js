// frontend/src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Paper, TextField, Typography, MenuItem } from "@mui/material";

const emailDomains = ["gmail.com", "naver.com", "kakao.com", "nate.com", "직접입력"];

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [emailDomain, setEmailDomain] = useState("gmail.com");
    const [customDomain, setCustomDomain] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);
    const navigate = useNavigate();

    const duplicateNickname = (username) => {
        
    }

    const validatePassword = (password) => {
        const errors = [];
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("❌ 특수문자 1자 이상 포함해야 합니다.");
        if (!/[a-z]/.test(password)) errors.push("❌ 영소문자 1자 이상 포함해야 합니다.");
        if (password.length < 8) errors.push("❌ 8자 이상이어야 합니다.");
        setPasswordErrors(errors);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullEmail = emailDomain === "직접입력" ? `${email}@${customDomain}` : `${email}@${emailDomain}`;
        try {
            await axios.post("http://localhost:5700/auth/register", { username, email: fullEmail, password });
            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/login");
        } catch (error) {
            console.error("회원가입 오류:", error.response ? error.response.data : error);
            alert("회원가입 실패! 다시 시도해주세요.");
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
                <Typography variant="h5" gutterBottom textAlign="center">
                    회원가입
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" gap={1}>
                            <TextField
                                label="닉네임"
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                margin="normal"
                                required
                            />
                            </Box>
                            <Box display="flex" gap={1}>
                                <TextField
                                    label="이메일"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                    required
                                />
                                <Box mt={4}>@</Box>
                                {emailDomain === "직접입력" ? (
                                    <TextField
                                        label="도메인 입력"
                                        variant="outlined"
                                        fullWidth
                                        value={customDomain}
                                        onChange={(e) => setCustomDomain(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                ) : (
                                    <TextField
                                        select
                                        variant="outlined"
                                        value={emailDomain}
                                        onChange={(e) => setEmailDomain(e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    >
                                        {emailDomains.map((domain) => (
                                            <MenuItem key={domain} value={domain}>{domain}</MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Box>
                            <TextField
                                label="비밀번호"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                margin="normal"
                                required
                            />
                            {passwordErrors.length > 0 ? (
                                <Box sx={{ color: "red", fontSize: "0.9rem" }}>
                                    {passwordErrors.map((error, index) => (
                                        <Typography key={index}>{error}</Typography>
                                    ))}
                                </Box>
                            ) : password.length > 0 && (
                                <Typography sx={{ color: "limegreen", fontSize: "0.9rem" }}>
                                    ✅ 사용 가능한 비밀번호 입니다.
                                </Typography>
                            )}
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                회원가입
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
};

export default Register;
