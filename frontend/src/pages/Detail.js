// frontend/src/pages/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Button, Box, Paper, Divider } from "@mui/material";
import CarouselRatio from '../components/MobileCarousel';
import OptionSelect from "../components/Select";
import Price from "../components/Price";
import OrderBox from "../components/OrderBox";
import DetailSection from "../components/DetailSection";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const detailInformation = {
        originalPrice: 100000,
        salePrice: 49800,
        deliveryFee: 3000,
    }

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
                            width: "100%",
                            mb: 5,
                        }}
                    />
                    <Typography textAlign="center" fontFamily="monospace">
                        BEST CORDINATION
                    </Typography>
                    <CarouselRatio />
                    <CardContent>
                        <Typography variant="h6">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                </Card>
                <Box display="flex" justifyContent="center">
                    <Divider
                        sx={{
                            my: 1,
                            width: "90%",
                        }}
                    />
                </Box>

                <Price originalPrice={post.originalPrice} discountedPrice={post.salePrice} deliveryFee={detailInformation.deliveryFee} />
                <OptionSelect clothesSize={detailInformation.size} clothesColor={detailInformation.color}/>

                <Box display="flex" justifyContent="center">
                    <Divider
                        sx={{
                            my: 1,
                            width: "90%",
                        }}
                    />
                </Box>

                <OrderBox />

                <DetailSection detailContent={post.detailContent}/>

                <Box display="flex" justifyContent="space-between" p={2}>
                    <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${id}`)}>수정</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>삭제</Button>
                </Box>

            </Paper>
        </Box>
    );
};

export default Detail;
