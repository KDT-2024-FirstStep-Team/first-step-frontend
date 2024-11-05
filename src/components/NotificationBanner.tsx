import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NotificationBannerProps {
  src: string;
  alt: string;
  text: string;
  path: string;
}

const NotificationBanner = ({
  src,
  alt,
  text,
  path
}: NotificationBannerProps) => {
  return (
    <BannerContainer>
      <img src={src} alt={alt}></img>
      <Text>{text}</Text>
      <StyledLink to={path}>
        <ChevronIcon src="/icons/chevron-right.svg" alt="Right"></ChevronIcon>
      </StyledLink>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 90%;
  height: 46px;
  margin: auto;
  padding: 16px;
  background-color: var(--gr100);
  border: 0.75px solid var(--gr70);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Text = styled.p`
  color: var(--gr40);
  font-weight: 500;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
`;

const ChevronIcon = styled.img`
  width: 20px;
  height: auto;
`;

export default NotificationBanner;
