// frontend/src/pages/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Button, Box, Paper } from "@mui/material";
import ItemOrder from "../components/ItemOrder";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5700/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error("데이터 불러오기 오류:", error));
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5700/posts/${id}`);
            navigate("/", { state: { delete: true } });
        } catch (error) {
            console.error("삭제 오류:", error);
        }
    };

    if (!post) return <p>로딩 중...</p>;

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            border="3px solid red"
        >
            <Paper elevation={3} sx={{ marginTop: 4, padding: 4, width: "100%", maxWidth: 500 }}>
                <Card
                    variant="outined"
                    display="flex"
                    justifyContent="around-between"
                    sx={{
                        width: "100%",
                        objectFit: "cover",
                        height: "auto"
                    }}>
                    <CardMedia
                        component="img"
                        image={post.thumbnail}
                        alt="썸네일 이미지"
                        sx={{
                            objectFit: "cover",
                            height: "auto",
                            width: "100%"
                        }}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                </Card>
                <ItemOrder />
                <Box display="flex" justifyContent="space-between" p={2}>
                    <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${id}`)}>수정</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>삭제</Button>
                </Box>

            </Paper>
        </Box>
    );
};

export default Detail;
