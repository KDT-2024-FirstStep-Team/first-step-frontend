import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import BackHeader from '@/components/BackHeader';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

import checkIcon from '/icons/check.svg';
import checkActiveIcon from '/icons/check-active.svg';

const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [noWeddingDate, setNoWeddingDate] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(180);
  const [error, setError] = useState('');
  const [dummyVerificationCode, setDummyVerificationCode] = useState('');

  const checkNicknameAvailability = async (value: string) => {
    const dummyNicknames = ['홍길동'];
    return !dummyNicknames.includes(value);
  };

  const checkEmailAvailability = async (value: string) => {
    const dummyEmails = ['existing@example.com'];
    return !dummyEmails.includes(value);
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleWeddingDateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setWeddingDate(e.target.value);
  const toggleNoWeddingDate = () => {
    setNoWeddingDate(!noWeddingDate);
    if (!noWeddingDate) {
      setWeddingDate('');
    }
  };

  const handleSignUp = () => {
    if (nickname && email && password && (weddingDate || noWeddingDate)) {
      console.log('회원가입 성공');
    } else {
      setError('회원가입 실패');
    }
  };

  const handleSendCode = () => {
    setIsCodeSent(true);
    setTimer(180);
    const generatedCode = '123456'; // 더미 인증 코드
    setDummyVerificationCode(generatedCode);
    console.log(`인증 코드가 전송되었습니다: ${generatedCode}`);
    // API 요청 추가 부분
    // fetch('/api/send-verification', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // }).then(/* 응답 처리 */);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setIsCodeSent(false);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  const isFormComplete =
    nickname &&
    email &&
    password &&
    verificationCode &&
    (weddingDate || noWeddingDate);

  return (
    <Wrapper>
      <PageContainer>
        <BackHeader title="회원가입" />
        <Content>
          <FormGroup>
            <TextInput
              label="닉네임"
              placeholder="닉네임을 입력하세요"
              onChange={handleNicknameChange}
              checkAvailability={checkNicknameAvailability}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormGroup>

          <FormGroup isEmail>
            <TextInput
              label="이메일 주소"
              placeholder="이메일 입력"
              type="email"
              onChange={handleEmailChange}
              checkAvailability={checkEmailAvailability}
            />
          </FormGroup>

          <VerificationCodeWrapper>
            <VerificationCodeInput
              placeholder="이메일로 전송된 인증코드"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
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

          <FormGroup>
            <TextInput
              label="비밀번호"
              placeholder="영문+숫자 8자 이상"
              type="password"
              onChange={handlePasswordChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>예식일</Label>
            <CustomDateInput
              placeholder={
                noWeddingDate
                  ? '아직 예식일을 결정하지 못했어요'
                  : '날짜를 선택하세요'
              }
              type="date"
              value={weddingDate}
              onChange={handleWeddingDateChange}
              disabled={noWeddingDate}
            />
            <CheckboxWrapper onClick={toggleNoWeddingDate}>
              <CheckboxIcon src={noWeddingDate ? checkActiveIcon : checkIcon} />
              <CheckboxLabel>아직 예식일을 결정하지 못했어요</CheckboxLabel>
            </CheckboxWrapper>
          </FormGroup>
        </Content>
        <ButtonContainer>
          <Button
            text="가입하기"
            backgroundColor={isFormComplete ? 'var(--pr10)' : 'var(--gr80)'}
            textColor="white"
            onClick={handleSignUp}
            disabled={!isFormComplete}
          />
        </ButtonContainer>
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
  height: 100vh;
  background-color: var(--gr100);
`;

const Content = styled.div`
  margin-top: 64px;
  width: 100%;
  padding: 20px;
  height: calc(100vh - 140px);
  overflow-y: auto;
`;

const FormGroup = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEmail',
})<{ isEmail?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.isEmail ? '12px' : '28px')};
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--gr50);
  font-weight: 500;
  line-height: 100%;
  margin-bottom: 8px;
`;

const VerificationCodeWrapper = styled.div`
  position: relative;
  margin-top: 12px;
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
`;

const TimerText = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--gr50);
`;

const ErrorMessage = styled.span`
  color: #ab291a;
  font-size: 13px;
  margin-top: 4px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  cursor: pointer;
`;

const CheckboxIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const CheckboxLabel = styled.span`
  color: var(--gr40);
  font-size: 15px;
  font-weight: 400;
  line-height: 100%;
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

const CustomDateInput = styled.input.attrs({ type: 'date' })`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: var(--gr60);
  border: 1px solid var(--gr70);
  border-radius: 8px;
  background-color: var(--gr100);
  line-height: 100%;
  padding: 16px;

  &:disabled {
    color: var(--gr60);
    background-color: var(--gr90);
  }
`;

export default SignUp;
