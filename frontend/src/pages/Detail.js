// // frontend/src/pages/Detail.js
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// import { DetailContainer,DetailTitle, DetailContent, Button, ButtonContainer, DetailThumbnail, ThumbnailContainer } from '../styles/DetailStyles';

// const Detail = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         axios.get(`http://192.168.10.100:5700/posts/${id}`)
//             .then(response => setPost(response.data))
//             .catch(error => console.error("데이터 불러오기 오류:", error));
//     }, [id]);

//     const handleDelete = async () => {
//         try {
//            const response = axios.delete(`http://192.168.10.100:5700/posts/${id}`);
//            console.log("삭제 성공:", response.data);
//            navigate("/", { state: { delete: true } });
//         } catch(error) {
//             console.error("삭제 오류:", error);
//         }
//             // .then(() => alert("삭제가 완료 되었습니다."))
//             // .then(() => navigate("/"))
//             // .catch(error => console.error("삭제 오류:", error));
//     };

//     if (!post) return <p>로딩 중...</p>;

//     return (
//         <DetailContainer>
//             <ThumbnailContainer>
//                 <DetailThumbnail src={post.thumbnail}></DetailThumbnail>
//             </ThumbnailContainer>
            
//             <DetailTitle>{post.title}</DetailTitle>
//             <DetailContent>{post.content}</DetailContent>

//             <ButtonContainer>
//                 <Button onClick={() => navigate(`/edit/${id}`)}>수정</Button>
//                 <Button onClick={handleDelete}>삭제</Button>
//             </ButtonContainer>
//         </DetailContainer>
//     );
// };

// export default Detail;

// frontend/src/pages/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://192.168.10.100:5700/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error("데이터 불러오기 오류:", error));
    }, [id]);

    const handleDelete = async () => {
        try {
           await axios.delete(`http://192.168.10.100:5700/posts/${id}`);
           navigate("/", { state: { delete: true } });
        } catch(error) {
            console.error("삭제 오류:", error);
        }
    };

    if (!post) return <p>로딩 중...</p>;

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ maxWidth: 600, p: 2, textAlign: "left" }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={post.thumbnail}
                    alt="썸네일 이미지"
                    sx={{ objectFit: "cover", display: "block", margin: "0 auto" }}
                />
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <Box display="flex" justifyContent="space-between" p={2}>
                    <Button variant="contained" color="primary" onClick={() => navigate(`/edit/${id}`)}>수정</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>삭제</Button>
                </Box>
            </Card>
        </Box>
    );
};

export default Detail;
