// frontend/src/pages/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { DetailContainer,DetailTitle, DetailContent, Button, ButtonContainer, DetailThumbnail, ThumbnailContainer } from '../styles/DetailStyles';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://192.168.10.101:5700/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error("데이터 불러오기 오류:", error));
    }, [id]);

    const handleDelete = async () => {
        try {
           const response = axios.delete(`http://192.168.10.101:5700/posts/${id}`);
           console.log("삭제 성공:", response.data);
           navigate("/", { state: { delete: true } });
        } catch(error) {
            console.error("삭제 오류:", error);
        }
            // .then(() => alert("삭제가 완료 되었습니다."))
            // .then(() => navigate("/"))
            // .catch(error => console.error("삭제 오류:", error));
    };

    if (!post) return <p>로딩 중...</p>;

    return (
        <DetailContainer>
            <ThumbnailContainer>
                <DetailThumbnail src={post.thumbnail}></DetailThumbnail>
            </ThumbnailContainer>
            
            <DetailTitle>{post.title}</DetailTitle>
            <DetailContent>{post.content}</DetailContent>

            <ButtonContainer>
                <Button onClick={() => navigate(`/edit/${id}`)}>수정</Button>
                <Button onClick={handleDelete}>삭제</Button>
            </ButtonContainer>
        </DetailContainer>
    );
};

export default Detail;
