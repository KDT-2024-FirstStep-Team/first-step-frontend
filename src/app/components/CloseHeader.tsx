'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';

interface CloseHeaderProps {
  title: string;
}

const CloseHeader = ({ title }: CloseHeaderProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <HeaderContainer>
        <Title>{title}</Title>
        <CloseButton onClick={() => router.back()}>
          <Image src="/icons/x.svg" alt="닫기" width={24} height={24} />
        </CloseButton>
      </HeaderContainer>
    </Wrapper>
  );
};

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
  max-width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gr100);
  position: relative;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--gr20);
  line-height: 100%;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;

export default CloseHeader;
