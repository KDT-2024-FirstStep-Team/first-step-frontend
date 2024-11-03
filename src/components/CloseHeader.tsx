import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import xIcon from '/icons/x.svg';

interface CloseHeaderProps {
  title: string;
}

const CloseHeader: React.FC<CloseHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <CloseButton onClick={() => navigate(-1)}>
        <img src={xIcon} alt="닫기" />
      </CloseButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 375px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gr100);
  position: relative;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--gr20);
  margin-left: 20px;
  line-height: 100%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 18px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export default CloseHeader;
