'use client';

import { useState } from 'react';
import styled from 'styled-components';

import arrowDownIcon from '../../../public/icons/Dropdown.svg';
import searchIcon from '../../../public/icons/search.svg';
import notificationIcon from '../../../public/icons/notification.svg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  showDropdownIcon?: boolean;
  showSearchIcon?: boolean;
  showNotificationIcon?: boolean;
}

const Header = ({
  title,
  showDropdownIcon = true,
  showSearchIcon = true,
  showNotificationIcon = true,
}: HeaderProps) => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
        {showDropdownIcon && (
          <DropdownButton onClick={toggleDropdown}>
            <Image src={arrowDownIcon} alt="Dropdown" width={20} height={20} />
          </DropdownButton>
        )}
      </TitleContainer>

      <IconsContainer>
        {showSearchIcon && (
          <IconButton onClick={() => router.push('/search')}>
            <Image src={searchIcon} alt="Search" width={24} height={24} />
          </IconButton>
        )}

        {showNotificationIcon && (
          <IconButton onClick={() => router.push('/notifications')}>
            <Image
              src={notificationIcon}
              alt="Notifications"
              width={24}
              height={24}
            />
          </IconButton>
        )}
      </IconsContainer>

      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => router.push('/consultant')}>
            상담
          </DropdownItem>
          <DropdownItem onClick={() => router.push('/analysis')}>
            성향분석
          </DropdownItem>
        </DropdownMenu>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 450px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px 0 20px;
  background-color: var(--gr100);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
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
