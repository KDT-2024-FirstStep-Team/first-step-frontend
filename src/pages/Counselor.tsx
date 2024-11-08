import React from 'react';
import Header from '@/components/Header';
import DropdownCategory from '@/components/DropdownCategory';
import Card from '@/components/Card'; // Adjust the path if necessary

const Counselor: React.FC = () => {
  const dropdownOptions = ['인기순', '만족도순'];

  const handleCategorySelect = (selectedOption: string) => {
    console.log('Selected category:', selectedOption);
  };

  return (
    <>
      <Header title="상담" showDropdownIcon={true} />
      <main className="content">
        <DropdownCategory
          label="맞춤 추천순"
          options={dropdownOptions}
          onSelect={handleCategorySelect}
        />

        {/* Sample Card Component */}
        <Card
          name="홍길동"
          rating={4.2}
          consultations={6}
          badge="초심 상담사"
          description="당신의 성향분석에 맞게 자세히 상담해드릴 수..."
          imageUrl="" // You can leave this empty to use the default profile icon
        />
      </main>
    </>
  );
};

export default Counselor;
