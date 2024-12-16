'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface CardBannerProps {
  userGuideSmallText?: string;
  userGuideBigText?: string;
  numberOfBbu?: number;
  location?: string;
}

const CardBanner = ({
  userGuideBigText,
  userGuideSmallText,
  numberOfBbu,
  location,
}: CardBannerProps) => {
  const isUserGuide = userGuideSmallText && userGuideBigText;
  const isBbuInfo = numberOfBbu;

  const router = useRouter();

  return (
    <>
      {isUserGuide && (
        <CardBannerContainer
          $isGuide={isUserGuide}
          onClick={() => router.push('/user-guide')}
        >
          <UserGuideSmallText>{userGuideSmallText}</UserGuideSmallText>
          <UserGuideBigText>{userGuideBigText}</UserGuideBigText>
        </CardBannerContainer>
      )}
      {isBbuInfo && (
        <CardBannerContainer
          $isGuide={isUserGuide}
          onClick={() => (location === 'mypage' ? router.push('/myheart') : '')}
        >
          <MyHeartText>보유 하트</MyHeartText>
          <NumberOfHeart>{numberOfBbu}</NumberOfHeart>
        </CardBannerContainer>
      )}
    </>
  );
};

const CardBannerContainer = styled.div<{ $isGuide: string | undefined }>`
  height: 80px;
  width: 90%;
  margin: ${(props) =>
    props.$isGuide === undefined ? '12px auto' : '20px auto'};
  background-image: url(./images/card-banner-bg.png);
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 0px 20px;
  display: flex;
  flex-direction: ${(props) => (props.$isGuide === undefined ? '' : 'column')};
  justify-content: ${(props) =>
    props.$isGuide === undefined ? 'space-between' : 'center'};
  align-items: ${(props) => (props.$isGuide === undefined ? 'center' : '')};
  box-sizing: border-box;
`;

const UserGuideSmallText = styled.p`
  color: var(--gr40);
  font-size: 14px;
  font-weight: 400;
`;

const UserGuideBigText = styled.p`
  color: var(--gr30);
  font-size: 18px;
  font-weight: 600;
  margin-left: -2px;
`;

const MyHeartText = styled.p`
  color: var(--gr40);
  font-size: 16px;
  font-weight: 500;
`;

const NumberOfHeart = styled.p`
  color: var(--gr30);
  font-size: 24px;
  font-weight: 500;
`;

export default CardBanner;
