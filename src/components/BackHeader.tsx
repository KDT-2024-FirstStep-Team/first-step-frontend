import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backIcon from '/icons/back.svg';

interface BackHeaderProps {
  title: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <img src={backIcon} alt="뒤로가기" />
      </BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 375px;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  background-color: var(--gr100);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 6px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--gr20);
  flex-grow: 1;
  text-align: left;
  line-height: 100%;
`;

export default BackHeader;
