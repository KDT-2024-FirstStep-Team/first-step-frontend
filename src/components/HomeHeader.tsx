import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderContainer>
        {/* 로고 클릭 시 루트 경로로 이동 */}
        <Logo src="/icons/logo.svg" alt="Logo" onClick={() => navigate('/')} />
        <IconButton onClick={() => navigate('/notification')}>
          <img src="/icons/notification.svg" alt="Notification" />
        </IconButton>
        <IconButton onClick={() => navigate('/mypage')}>
          <img src="/icons/mypage.svg" alt="My Page" />
        </IconButton>
        <ConsultantButton onClick={() => alert('상담사로 전환됩니다.')}>
          상담사 전환
        </ConsultantButton>
      </HeaderContainer>
    </Wrapper>
  );
};

export default HomeHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  width: 100%;
  max-width: 425px;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 22px;
  background-color: var(--gr100);
`;

const Logo = styled.img`
  width: auto;
  height: auto;
  flex-shrink: 0;
  cursor: pointer;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 20px;

  img {
    width: 24px;
    height: 24px;
  }

  &:first-of-type {
    margin-left: auto;
  }
`;

const ConsultantButton = styled.button`
  background-color: var(--gr100);
  border: 1px solid var(--gr80);
  color: var(--gr50);
  border-radius: 8px;
  padding: 9px 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 18px;
  display: flex;
  align-items: center;
  line-height: 100%;
`;
