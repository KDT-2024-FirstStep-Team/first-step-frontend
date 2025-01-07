import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const downIcon = '/icons/down.svg';

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('[data-dropdown]')) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <DropdownWrapper data-dropdown>
      <DropdownButton
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isDropdownOpen}
        role="button"
        tabIndex={0}
      >
        <span>{selectedLabel}</span>
        <img src={downIcon} alt="드롭다운 열기" />
      </DropdownButton>
      {isDropdownOpen && (
        <DropdownMenu>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionSelect(option)}
              tabIndex={0}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default DropdownCategory;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid var(--gr70);
  background-color: var(--gr100);
  border-radius: 16px;
  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: 400;
    color: var(--gr40);
    margin-right: 4px;
  }

  img {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({ ariaExpanded }: { ariaExpanded?: boolean }) =>
      ariaExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background-color: var(--gr100);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 10px 12px;
  font-size: 15px;
  color: var(--gr30);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--gr90);
  }

  &:focus {
    background-color: var(--gr90);
    outline: none;
  }
`;
