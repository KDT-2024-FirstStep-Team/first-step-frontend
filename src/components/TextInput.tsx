import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  label: string;
  placeholder: string;
  checkAvailability?: (value: string) => Promise<boolean>; // 중복 확인 함수 (선택)
  saveToBackend?: (value: string) => Promise<void>; // 백엔드 저장 함수 (선택)
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const TextInput = ({
  label,
  placeholder,
  checkAvailability,
  saveToBackend,
  type = 'text',
  onChange,
  disabled = false,
}: TextInputProps) => {
  const [value, setValue] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsAvailable(null);
    setMessage('');
    if (onChange) onChange(e);
  };

  const handleCheckAndSave = async () => {
    if (value && checkAvailability) {
      try {
        const available = await checkAvailability(value);
        setIsAvailable(available);
        setMessage(available ? '사용 가능합니다' : '이미 사용 중입니다');

        if (available && saveToBackend) {
          await saveToBackend(value);
        }
      } catch (error) {
        console.error('Error during availability check:', error);
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <Label>{label}</Label>
        <InputContainer $isAvailable={isAvailable} $disabled={disabled}>
          <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={checkAvailability ? handleCheckAndSave : undefined}
            disabled={disabled}
          />
        </InputContainer>
        {message && <Message $isAvailable={isAvailable}>{message}</Message>}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 425px;
`;

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--gr50);
  font-weight: 500;
  line-height: 14px;
  margin-left: 2px;
`;

const InputContainer = styled.div<{
  $isAvailable: boolean | null;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ $disabled }) =>
    $disabled ? 'var(--gr90)' : 'var(--gr100)'};
  border: 0.75px solid
    ${({ $isAvailable, $disabled }) =>
      $disabled
        ? 'var(--gr70)'
        : $isAvailable === null
          ? 'var(--gr60)'
          : $isAvailable
            ? '#2CAD5A'
            : '#AB291A'};
  border-radius: 8px;
  margin-top: 4px;
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

  &:disabled {
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
