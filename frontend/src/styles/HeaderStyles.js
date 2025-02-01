// src/styles/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;
