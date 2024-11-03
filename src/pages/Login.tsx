import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextInput from '@/components/TextInput';
import CloseHeader from '@/components/CloseHeader';
import CustomButton from '@/components/Button';

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
        <ButtonContainer>
          <CustomButton
            text="로그인"
            backgroundColor="var(--pr10)"
            textColor="var(--gr100)"
            onClick={onLogin}
          />
        </ButtonContainer>
      </ContentContainer>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>로그인 실패</ModalTitle>
            <ModalMessage>아이디 또는 비밀번호가 잘못되었습니다.</ModalMessage>
            <ModalButton onClick={() => setShowModal(false)}>확인</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--gr100);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  min-height: 748px;
  padding: 0 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
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
  color: #fff;
  background-color: var(--pr10);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Login;
