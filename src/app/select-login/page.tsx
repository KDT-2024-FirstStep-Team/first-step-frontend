'use client';

import Button from '../components/Button';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const SelectLogin = () => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <Image
            src="/icons/logo.svg"
            alt="쀼의세계 로고"
            width={125}
            height={125}
          />
        </LogoContainer>
        <Description>
          사랑은 깊게, 갈등 해결은 쉽게 <br />
          행복한 부부 생활의 첫걸음
        </Description>
        <ButtonContainer>
          <Button
            text="카카오 로그인"
            icon={
              <Image
                src="/icons/kakao.svg"
                alt="Kakao"
                width={24}
                height={24}
              />
            }
            backgroundColor="#FEE500"
            textColor="var(--gr30)"
            path="/login"
          />
          <Button
            text="네이버 로그인"
            icon={
              <Image
                src="/icons/naver.svg"
                alt="Naver"
                width={24}
                height={24}
              />
            }
            backgroundColor="#00CB00"
            textColor="var(--gr100)"
            path="/login"
          />
          <Button
            text="이메일 로그인"
            backgroundColor="var(--gr80)"
            textColor="var(--gr30)"
            path="/login"
          />
        </ButtonContainer>
        <Footer>
          <FooterLink href="/password">비밀번호 찾기</FooterLink>
          <Divider>|</Divider>
          <FooterLink href="/signup">회원가입</FooterLink>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default SelectLogin;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 425px;
  padding-top: 253px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: var(--gr50);
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 186px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 335px;
  margin-bottom: 12px;
`;

const Footer = styled.div`
  color: var(--gr50);
  font-size: 13px;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: var(--gr50);
`;

const Divider = styled.span`
  color: var(--gr70);
`;
