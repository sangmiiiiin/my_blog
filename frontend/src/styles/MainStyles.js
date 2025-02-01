// src/styles/CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // 3개의 열로 분할
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
