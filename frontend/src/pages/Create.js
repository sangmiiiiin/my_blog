import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Paper, TextField, Typography } from "@mui/material";


const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); // 이미지 상태에 저장
            setThumbnail(URL.createObjectURL(file)); // 미리보기 표시
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = "";

        // 1️⃣ 이미지 업로드 (파일이 선택된 경우만)
        if (imageFile) {
            const formData = new FormData();
            formData.append("image", imageFile);

            try {
                const response = await axios.post("http://localhost:5700/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                imageUrl = (response.data.imageUrl); // 이미지 URL 저장
            } catch (error) {
                console.error("이미지 업로드 오류:", error.response ? error.response.data : error);
                return;
            }
        }
        // 2️⃣ 글 저장
        try {
            await axios.post("http://localhost:5700/posts", { 
                title, 
                content,
                thumbnail: imageUrl, // 업로드된 이미지 URL 저장
             });
            navigate("/", { state: { success: true } });
        } catch (error) {
            console.error("글 작성 오류:", error);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={3} sx={{ marginTop: 4, padding: 4, width: "100%", maxWidth: 600 }}>
                <Typography variant="h5" gutterBottom>
                    새 글 작성
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="제목"
                                variant="outlined"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="내용"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                margin="normal"
                            />
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            { thumbnail && <img src={thumbnail} alt="미리보기" width="100%" /> }
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                작성
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
};

export default Create;
