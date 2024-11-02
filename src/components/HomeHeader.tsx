import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 375px;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 22px;
  background-color: var(--gr100);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: auto;
  height: auto;
  flex-shrink: 0;
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
  line-height: 100%;
  align-items: center;
`;

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default HomeHeader;
