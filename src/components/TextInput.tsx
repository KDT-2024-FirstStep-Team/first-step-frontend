import React, { useState } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  label: string;
  placeholder: string;
  checkAvailability?: (value: string) => Promise<boolean>; // 중복 확인 함수 (선택)
  saveToBackend?: (value: string) => Promise<void>; // 백엔드 저장 함수 (선택)
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  checkAvailability,
  saveToBackend,
  type = 'text',
  onChange,
}) => {
  const [value, setValue] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsAvailable(null);
    setMessage('');
    if (onChange) onChange(e);
  };

  const handleCheckAndSave = async () => {
    if (value && checkAvailability) {
      // 중복 검사 함수가 제공된 경우
      try {
        const available = await checkAvailability(value);
        setIsAvailable(available);
        setMessage(available ? '사용 가능합니다' : '이미 사용 중입니다');

        if (available && saveToBackend) {
          // 중복 검사 통과 시 저장 함수 실행
          await saveToBackend(value);
        }
      } catch (error) {
        console.error('Error during availability check:', error);
      }
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer $isAvailable={isAvailable}>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={checkAvailability ? handleCheckAndSave : undefined} // 중복 검사 (선택)
        />
      </InputContainer>
      {message && <Message $isAvailable={isAvailable}>{message}</Message>}
    </Container>
  );
};

const Container = styled.div`
  width: 335px;
  margin: auto;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--gr50);
  font-weight: 500;
  line-height: 100%;
  margin-left: 2px;
`;

const InputContainer = styled.div<{ $isAvailable: boolean | null }>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--gr100);
  border: 0.75px solid
    ${(props) =>
      props.$isAvailable === null
        ? 'var(--gr60)'
        : props.$isAvailable
          ? '#2CAD5A'
          : '#AB291A'};
  border-radius: 8px;
  margin-top: 2px;
  height: 56px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: var(--gr30);
  background-color: transparent;

  &::placeholder {
    color: var(--gr60);
  }
`;

const Message = styled.p<{ $isAvailable: boolean | null }>`
  font-size: 15px;
  font-weight: 400;
  line-height: 100%;
  color: ${(props) => (props.$isAvailable ? '#2CAD5A' : '#AB291A')};
  margin-top: 12px;
  margin-left: 2px;
`;

export default TextInput;
