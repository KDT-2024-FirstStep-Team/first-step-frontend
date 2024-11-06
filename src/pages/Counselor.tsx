import React from 'react';
import Header from '@/components/Header';
import DropdownCategory from '@/components/DropdownCategory';

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
      </main>
    </>
  );
};

export default Counselor;
