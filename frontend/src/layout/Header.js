import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, NavList, NavLink } from '../styles/HeaderStyles';  // 스타일 임포트

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sangmin's Blog</Link>
      </Logo>
      <nav>
        <NavList>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/guestbook">Guestbook</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
