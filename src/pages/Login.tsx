import React from 'react';
import TextInput from '@/components/TextInput';

const ExamplePage = () => {
  // 임의의 중복 검사 함수
  const mockCheckAvailability = async (value: string) => {
    const duplicateValues = ['test@example.com', 'duplicate@example.com'];
    return !duplicateValues.includes(value); // 중복이면 false, 사용 가능이면 true 반환
  };

  const mockSaveToBackend = async (value: string) => {
    console.log('Saved to backend:', value);
  };

  return (
    <div>
      <TextInput
        label="이메일 주소"
        placeholder="이메일 입력"
        checkAvailability={mockCheckAvailability}
        saveToBackend={mockSaveToBackend}
      />
    </div>
  );
};

export default ExamplePage;
