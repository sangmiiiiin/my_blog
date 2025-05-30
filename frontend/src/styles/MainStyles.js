// src/styles/CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // 3개의 열로 분할
  gap: 20px;    // 각 카드 사이 (가로, 세로 모두)
  padding: 20px;    // 컨테이너 안에 있는 태그들의 여백을 설정
  border: 0px solid red;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

export const Card = styled.div`
  border: 1px solid #ddd;   // 테두리(연한 회색)
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;  // 대기 시간은 생략되어 있다

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: contain;
  margin-top: 5vh;

  
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

export const ReadMore = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostButton = styled.button`
  
`;

export const BannerBox = styled.div`
  border: 0px solid black;
  width: 65vw;
  height: 40vh;
  margin-right: 2.5vw;

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 30vh;
  }
`;

export const BannerImg = styled.img`
  margin-top: 1vw;
  width: 94%;
  height: 100%;
  object-fit: cover;
  object-position: 0 5%;

  @media (max-width: 480px) {
    object-fit: contain;
    /* object-position: 10%; */
  }
`;