'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';

import searchIcon from '../../../public/icons/search.svg';
import notificationIcon from '../../../public/icons/notification.svg';

interface HeaderProps {
  title: string;
  showSearchIcon?: boolean;
  showNotificationIcon?: boolean;
}

const Header = ({
  title,
  showSearchIcon = true,
  showNotificationIcon = true,
}: HeaderProps) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Title>{title}</Title>

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

const Title = styled.h1`
  font-size: 22px;
  color: var(--gr20);
  font-weight: 600;
  line-height: 100%;
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

export default Header;
