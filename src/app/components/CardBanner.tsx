import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CardBannerProps {
  userGuideSmallText?: string;
  userGuideBigText?: string;
  bbuText?: string;
  numberOfBbu?: string;
}

const CardBanner = ({
  userGuideBigText,
  userGuideSmallText,
  bbuText,
  numberOfBbu
}: CardBannerProps) => {
  const isUserGuide = userGuideSmallText && userGuideBigText;
  const isBbuInfo = bbuText && numberOfBbu;

  const navigate = useNavigate();

  const handleClick = () => {
    if (isUserGuide) {
      navigate('/user-guide');
    }
    if (isBbuInfo) {
      navigate('/'); // 나중에 추가
    }
  };

  return (
    <CardBannerContainer onClick={handleClick}>
      {isUserGuide && (
        <>
          <UserGuideSmallText>{userGuideSmallText}</UserGuideSmallText>
          <UserGuideBigText>{userGuideBigText}</UserGuideBigText>
        </>
      )}
      {isBbuInfo && <></> /** 니중에 추가 */}
    </CardBannerContainer>
  );
};

const CardBannerContainer = styled.div`
  height: 80px;
  width: 90%;
  margin: 20px auto;
  background-image: url(./images/card-banner-bg.png);
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 0px 20px;\
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default CardBanner;
