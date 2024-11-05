import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import BackHeader from '@/components/BackHeader';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

const Password = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(180);
  const [dummyVerificationCode, setDummyVerificationCode] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = () => {
    setIsCodeSent(true);
    setTimer(180);
    const generatedCode = '123456'; // 더미 인증 코드
    setDummyVerificationCode(generatedCode);
    console.log(`인증 코드가 전송되었습니다: ${generatedCode}`);
  };

  const handlePasswordRecovery = () => {
    if (verificationCode === dummyVerificationCode) {
      console.log('비밀번호 찾기 성공');
    } else {
      console.log('인증 코드가 올바르지 않습니다.');
    }
  };

  const isFormComplete = email && verificationCode;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setIsCodeSent(false);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  return (
    <Wrapper>
      <BackHeader title="비밀번호 찾기" />
      <Content>
        <FormContainer>
          <FormGroup>
            <TextInput
              label="이메일 주소"
              placeholder="이메일 입력"
              onChange={handleEmailChange}
              value={email}
            />
          </FormGroup>

          <VerificationCodeWrapper>
            <VerificationCodeInput
              placeholder="이메일로 전송된 인증코드"
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              disabled={!isCodeSent}
            />
            {!isCodeSent ? (
              <RequestCodeButton onClick={handleSendCode} disabled={!email}>
                전송 요청
              </RequestCodeButton>
            ) : (
              <TimerText>{`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`}</TimerText>
            )}
          </VerificationCodeWrapper>
        </FormContainer>
      </Content>
      <ButtonContainer>
        <Button
          text="비밀번호 찾기"
          onClick={handlePasswordRecovery}
          backgroundColor={isFormComplete ? 'var(--pr10)' : 'var(--gr80)'}
          textColor="white"
          disabled={!isFormComplete}
        />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 64px;
  height: calc(100vh - 64px - 86px);
  overflow-y: auto;
`;

const FormContainer = styled.div`
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const VerificationCodeWrapper = styled.div`
  position: relative;
  margin-bottom: 28px;
`;

const VerificationCodeInput = styled.input`
  width: 100%;
  height: 55px;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  padding: 20px 80px 20px 20px;
  border: 1px solid var(--gr70);
  border-radius: 8px;
  background-color: var(--gr100);
  color: var(--gr30);

  &::placeholder {
    color: var(--gr60);
  }

  &:not(:placeholder-shown) {
    color: var(--gr30);
  }
`;

const RequestCodeButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: var(--gr50);
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  border: none;
`;

const TimerText = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--gr50);
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 34px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  background-color: var(--gr100);
`;

export default Password;
