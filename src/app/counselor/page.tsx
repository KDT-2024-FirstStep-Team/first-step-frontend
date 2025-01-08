'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import DropdownCategory from '../components/DropdownCategory';
import Card from '../components/Card';
import NavBar from '../components/NavBar'; // 하단 네비게이션 컴포넌트 추가

const Counselor: React.FC = () => {
  const dropdownOptions = ['인기순', '만족도순'];
  const [selectedCategory, setSelectedCategory] = useState('맞춤 추천순');

  const handleCategorySelect = (selectedOption: string) => {
    setSelectedCategory(selectedOption);
    console.log('Selected category:', selectedOption);
  };

  return (
    <Container>
      <Header title="상담" showDropdownIcon={true} />
      <MainContent>
        <DropdownCategory
          label={selectedCategory}
          options={dropdownOptions}
          onSelect={handleCategorySelect}
        />
        <CardList>
          <Card
            name="홍길동"
            rating={4.2}
            consultations={6}
            badge="초심 상담사"
            description="당신의 성향분석에 맞게 자세히 상담해드릴 수 있습니다."
            imageUrl="/icons/default-profile.png"
          />
          <Card
            name="김철수"
            rating={4.5}
            consultations={12}
            badge="전문 상담사"
            description="여러 문제를 해결해 드리며, 귀 기울여 상담합니다."
            imageUrl="/icons/default-profile.png"
          />
        </CardList>
      </MainContent>
      <NavBar /> {/* 하단 네비게이션 추가 */}
    </Container>
  );
};

export default Counselor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--gr100);
`;

const MainContent = styled.main`
  margin-top: 64px;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  background-color: var(--gr100);
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;
