import React, { useState } from 'react';
import styled from 'styled-components';
import downIcon from '/icons/down.svg'; // Adjust the path to your SVG file

interface DropdownCategoryProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownCategory: React.FC<DropdownCategoryProps> = ({
  label,
  options,
  onSelect,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionSelect = (option: string) => {
    setSelectedLabel(option);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        <span>{selectedLabel}</span>
        <img src={downIcon} alt="Dropdown icon" />
      </DropdownButton>
      {isDropdownOpen && (
        <DropdownMenu>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px 8px 14px;
  border-radius: 16px;
  border: 1px solid var(--gr70);
  background-color: var(--gr100);
  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: 400;
    color: var(--gr40);
    margin-right: 2px;
    line-height: 100%;
  }

  img {
    width: 14px;
    height: 14px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: var(--gr100);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px 12px;
  color: var(--gr30);
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--gr90);
  }
`;

export default DropdownCategory;
