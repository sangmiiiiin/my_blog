// src/pages/Main.js
import React, { useEffect, useState } from 'react';
import { CardContainer, Card, Thumbnail, CardContent, Title, Description, ReadMore } from '../styles/MainStyles'; // 스타일 파일에서 import
import { Alert, Box, Snackbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Carousel from '../components/Carousel';




const Main = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '첫 번째 게시글 제목',
            description: '첫 번째 게시글 내용 요약',
            link: '/post/1',
        },
        {
            id: 2,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '두 번째 게시글 제목',
            description: '두 번째 게시글 내용 요약',
            link: '/post/2',
        },
        {
            id: 3,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '세 번째 게시글 제목',
            description: '세 번째 게시글 내용 요약',
            link: '/post/3',
        },
    ]);
    const location = useLocation();
    const [post, setPost] = useState(false);
    const [del, setDel] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5700/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.error("데이터 불러오기 오류:", error));
    }, []);

    useEffect(() => {
        // location.state에서 success 값이 true이면 Alert을 띄운다
        if (location.state?.success) {
            console.log("상태 전달 양호");
            setPost(true);

            // 3초 후 Alert 자동 닫기
            const timer = setTimeout(() => {
                setPost(false);
                navigate(location.state.success, { replace: true, state: {} });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [location.state, navigate]);

    useEffect(() => {
        // location.state에서 success 값이 true이면 Alert을 띄운다
        if (location.state?.delete) {
            console.log("상태 전달 양호");
            setDel(true);

            // 3초 후 Alert 자동 닫기
            const timer = setTimeout(() => {
                setDel(false);
                navigate(location.state.delete, { replace: true, state: {} });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [location.state, navigate]);

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={post} autoHideDuration={3000} onClose={() => setPost(false)}>
                <Alert onClose={() => setPost(false)} severity="success" variant="filled">
                    글이 성공적으로 작성되었습니다!
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={del} autoHideDuration={3000} onClose={() => setDel(false)}>
                <Alert onClose={() => setDel(false)} severity="error" variant="filled">
                    글이 삭제되었습니다!
                </Alert>
            </Snackbar>

            <Box
                justifyContent="center"
                width="100%"
                sx={{
                    mb: { xs: 10 } - 4,
                    display: { xs: 'block', md: 'flex' },
                }}
            >
                <Carousel />
            </Box>

            <CardContainer>
                {posts.map(post => (
                    <Card 
                        key={post.id} 
                        style={{ backgroundColor: "white" }}
                        onClick={() => navigate(`/posts/${post._id}`)}
                    >
                        <Thumbnail src={post.thumbnail} alt={post.title} />
                        <CardContent>
                            <Title>{post.title}</Title>
                            <Description>{post.description}</Description>
                            <ReadMore href={post.link}>Read More</ReadMore>
                        </CardContent>
                    </Card>
                ))}
            </CardContainer>
        </>
    );
}

export default Main;
