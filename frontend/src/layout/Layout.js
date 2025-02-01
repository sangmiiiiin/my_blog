import React from 'react';
import { LayoutContainer, MainContent } from '../styles/LayoutStyles';  // 스타일 임포트
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
