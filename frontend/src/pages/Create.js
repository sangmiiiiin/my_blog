import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Chip, MenuItem, Paper, TextField, Typography } from "@mui/material";

const categoryOptions = ['상의', '하의', '기타'];


const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [originalPrice, setOriginalPrice] = useState(null);
    const [salePrice, setSalePrice] = useState(null);
    const [detailContent, setDetailContent] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [category, setCategory] = useState("");
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [inputSize, setInputSize] = useState("");
    const [inputColor, setInputColor] = useState("");

    const navigate = useNavigate();

    const handleAddSize = () => {
        if (inputSize && !sizes.includes(inputSize)) {
            setSizes([...sizes, inputSize]);
            setInputSize("");
        }
    };

    const handleAddColor = () => {
        if (inputColor && !colors.includes(inputColor)) {
            setColors([...colors, inputColor]);
            setInputColor("");
        }
    };

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
                originalPrice,
                salePrice,
                detailContent,
                category,
                options: category === '상의' || category === "하의" ? { sizes, colors } : null,
                thumbnail: imageUrl, // 업로드된 이미지 URL 저장
            });
            navigate("/main", { state: { success: true } });
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
                                label="간단설명"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="원래가격"
                                variant="outlined"
                                fullWidth
                                value={originalPrice}
                                onChange={(e) => setOriginalPrice(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="할인가격"
                                variant="outlined"
                                fullWidth
                                value={salePrice}
                                onChange={(e) => setSalePrice(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="카테고리"
                                select
                                fullWidth
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                margin="normal"
                            >
                                {categoryOptions.map((c) => (
                                    <MenuItem key={c} value={c}>
                                        {c}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {(category === "상의" || category === "하의") && (
                                <>
                                    <Box display="flex" gap={1} alignItems="center">
                                        <TextField
                                            label="사이즈 입력"
                                            value={inputSize}
                                            onChange={(e) => setInputSize(e.target.value)}
                                        />
                                        <Button onClick={handleAddSize}>추가</Button>
                                    </Box>
                                    <Box sx={{ my: 1 }}>
                                        {sizes.map((s) => <Chip key={s} label={s} sx={{ mr: 1 }} />)}
                                    </Box>

                                    <Box display="flex" gap={1} alignItems="center">
                                        <TextField
                                            label="컬러 입력"
                                            value={inputColor}
                                            onChange={(e) => setInputColor(e.target.value)}
                                        />
                                        <Button onClick={handleAddColor}>추가</Button>
                                    </Box>
                                    <Box sx={{ my: 1 }}>
                                        {colors.map((c) => <Chip key={c} label={c} sx={{ mr: 1 }} />)}
                                    </Box>
                                </>
                            )}


                            <TextField
                                label="상세설명"
                                variant="outlined"
                                fullWidth
                                multiline
                                value={detailContent}
                                rows={5}
                                onChange={(e) => setDetailContent(e.target.value)}
                                margin="normal"
                            />
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            {thumbnail && <img src={thumbnail} alt="미리보기" width="100%" />}
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
