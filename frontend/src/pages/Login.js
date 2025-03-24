// frontend/src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5700/auth/login",
                { email, password },
                { withCredentials: true } // 쿠키 포함
            );
            console.log("로그인 성공! 토큰: ", response.data.token); // 콘솔에 출력
            alert("로그인 성공!");
            navigate("/");
        } catch (error) {
            console.error("로그인 오류:", error.response ? error.response.data : error);
            alert("로그인 실패! 이메일 또는 비밀번호를 확인하세요.");
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
                <Typography variant="h5" gutterBottom textAlign="center">
                    로그인
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="이메일"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="비밀번호"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Box display="flex" justifyContent="center">
                                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "10vw", mr: 2 }}>
                                    로그인
                                </Button>
                                <Button href="/register" type="button" variant="contained" color="success" sx={{ mt: 2, width: "10vw" }}>
                                    회원가입
                                </Button>
                            </Box>

                        </form>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
};

export default Login;
