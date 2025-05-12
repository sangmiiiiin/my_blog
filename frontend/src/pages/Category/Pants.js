import { CardContainer, Card, Thumbnail, CardContent, Title, Description } from '../../styles/MainStyles'; // 스타일 파일에서 import
import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTitle from '../../components/CategoryTitle';
import axios from 'axios';



export default function Pants() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '첫 번째 게시글 제목',
            description: '첫 번째 게시글 내용 요약',
            link: '/post/1',
            salePrice: 30000,
        },
    ])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5700/posts")
            .then(response => {
                const filtered = response.data.filter(post => post.category === "하의");
                setPosts(filtered);
            })
            .catch(error => console.error("데이터 불러오기 오류:", error));
    }, []);



    return (
        <>
            <CategoryTitle title={"하의"} subTitle={"BEST ITEM"} />
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
                            <Description>₩ {Number(post.salePrice).toLocaleString()}</Description>
                        </CardContent>
                    </Card>
                ))}
            </CardContainer>
        </>
    );
};