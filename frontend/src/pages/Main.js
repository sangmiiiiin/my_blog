// src/pages/Main.js
import React, { useState } from 'react';
import { CardContainer, Card, Thumbnail, CardContent, Title, Description, ReadMore } from '../styles/MainStyles'; // 스타일 파일에서 import

function Main() {
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
        {
            id: 4,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '네 번째 게시글 제목',
            description: '네 번째 게시글 내용 요약',
            link: '/post/4',
        },
        {
            id: 5,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '다섯 번째 게시글 제목',
            description: '다섯 번째 게시글 내용 요약',
            link: '/post/5',
        },
        {
            id: 6,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '여섯 번째 게시글 제목',
            description: '여섯 번째 게시글 내용 요약',
            link: '/post/6',
        },
        {
            id: 7,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '일곱 번째 게시글 제목',
            description: '일곱 번째 게시글 내용 요약',
            link: '/post/7',
        },
        {
            id: 8,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '여덟 번째 게시글 제목',
            description: '여덟 번째 게시글 내용 요약',
            link: '/post/8',
        },
        {
            id: 9,
            thumbnail: 'https://via.placeholder.com/400x200',
            title: '아홉 번째 게시글 제목',
            description: '아홉 번째 게시글 내용 요약',
            link: '/post/9',
        },
    ]);

    return (
        <CardContainer>
            {posts.map(post => (
                <Card key={post.id}>
                    <Thumbnail src={post.thumbnail} alt={post.title} />
                    <CardContent>
                        <Title>{post.title}</Title>
                        <Description>{post.description}</Description>
                        <ReadMore href={post.link}>Read More</ReadMore>
                    </CardContent>
                </Card>
            ))}
        </CardContainer>
        
    );
}

export default Main;
