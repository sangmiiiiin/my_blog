import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

const Mypage = () => {
    const user = {
        name: "홍길동",
        username: "gildong123",
        profileImage: "/static/images/avatar/default.jpg", // 기본 이미지
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: { xs: "90%", sm: "400px" }, // 모바일 퍼스트
                    backgroundColor: "white",
                    borderRadius: "16px",
                }}
            >
                {/* 프로필 이미지 */}
                <Button>
                    <Avatar
                        src="/static/images/avatar/default.jpg" // 기본 이미지 (변경 가능)
                        alt="User Profile"
                        sx={{
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />

                </Button>
                {/* 유저 이름 (h1 크기) */}
                <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                    {user.name}
                </Typography>

                {/* 유저 아이디 (h3 크기) */}
                <Typography variant="h6" color="gray" sx={{ mt: 1 }}>
                    @{user.username}
                </Typography>{/*  */}

                {/* 프로필 업로드 버튼 */}
                <Box
                    display="flex"
                    justifyContent="space-around"
                    sx={{ width: "100%" }}
                >
                    <Button
                        color="inherit"
                        variant="contained"
                        sx={{ mt: 2, width: "45%" }}
                    >
                        프로필 수정
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};
export default Mypage