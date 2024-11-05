import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextInput from '@/components/TextInput';
import CloseHeader from '@/components/CloseHeader';
import Button from '@/components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const dummyUser = {
    email: 'test@naver.com',
    password: '12345678',
  };

  const onLogin = () => {
    if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem('token', 'dummy_token');
      navigate('/');
    } else {
      setShowModal(true);
    }
  };

  return (
    <Wrapper>
      <PageContainer>
        <CloseHeader title="로그인" />
        <ContentContainer>
          <InputContainer>
            <TextInput
              label="이메일 주소"
              placeholder="이메일 입력"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="비밀번호"
              placeholder="영문+숫자 8자 이상"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
        </ContentContainer>
        <ButtonContainer>
          <Button text="로그인" onClick={onLogin} />
        </ButtonContainer>
        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <ModalTitle>로그인 실패</ModalTitle>
              <ModalMessage>
                아이디 또는 비밀번호가 잘못되었습니다.
              </ModalMessage>
              <ModalButton onClick={() => setShowModal(false)}>
                확인
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </PageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 425px;
  min-height: 100vh;
  background-color: var(--gr100);
  position: relative;
  padding-bottom: 34px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px 0 20px;
  flex: 1;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 34px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 300px;
  padding: 20px;
  background: var(--gr100);
  border-radius: 8px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ModalMessage = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: var(--gr100);
  background-color: var(--pr10);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Login;
