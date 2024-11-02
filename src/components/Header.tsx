import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import arrowDownIcon from '/icons/Dropdown.svg';
import searchIcon from '/icons/search.svg';
import notificationIcon from '/icons/notification.svg';

interface HeaderProps {
  title: string;
  showDropdownIcon?: boolean;
  showSearchIcon?: boolean;
  showNotificationIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showDropdownIcon = true,
  showSearchIcon = true,
  showNotificationIcon = true,
}) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
        {showDropdownIcon && (
          <DropdownButton onClick={toggleDropdown}>
            <img src={arrowDownIcon} alt="Dropdown" />
          </DropdownButton>
        )}
      </TitleContainer>

      <IconsContainer>
        {showSearchIcon && (
          <IconButton onClick={() => navigate('/search')}>
            <img src={searchIcon} alt="Search" />
          </IconButton>
        )}

        {showNotificationIcon && (
          <IconButton onClick={() => navigate('/notifications')}>
            <img src={notificationIcon} alt="Notifications" />
          </IconButton>
        )}
      </IconsContainer>

      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => navigate('/consultant')}>
            상담
          </DropdownItem>
          <DropdownItem onClick={() => navigate('/analysis')}>
            성향분석
          </DropdownItem>
          {/* 추가 옵션 필요 시 여기에 추가 */}
        </DropdownMenu>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 375px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px 0 20px;
  background-color: var(--gr100);
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 22px;
  color: var(--gr20);
  margin-right: 4px;
  font-weight: 600;
  line-height: 100%;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 20px;
    height: 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 24px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 20px;
  width: 120px;
  background-color: var(--gr100);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  color: var(--gr30);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--gr100);
  }
`;

export default Header;
