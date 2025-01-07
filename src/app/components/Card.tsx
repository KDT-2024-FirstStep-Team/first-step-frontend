import React from 'react';
import styled from 'styled-components';

const StarIcon = '/icons/star.svg';
const DefaultProfileIcon = '/icons/profile-s.svg';

type CardProps = {
  name: string;
  rating: number;
  consultations: number;
  badge: string;
  description: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({
  name,
  rating,
  consultations,
  badge,
  description,
  imageUrl = DefaultProfileIcon,
}) => {
  return (
    <CardContainer>
      <ProfileImage src={imageUrl} alt={`${name} 상담사 프로필`} />
      <InfoContainer>
        <Name>{name} 상담사</Name>
        <RatingContainer>
          <RatingBadge>
            <img
              src={StarIcon}
              alt="별점"
              style={{ width: '10px', height: '10px', marginRight: '4px' }}
            />
            <Rating>{rating.toFixed(1)}</Rating>
          </RatingBadge>
          <Badge>{consultations}회 상담</Badge>
          <Badge>{badge}</Badge>
        </RatingContainer>
        <Description>{description}</Description>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  padding: 16px;
  border: 1px solid var(--gr80);
  border-radius: 8px;
  background-color: var(--gr100);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
  background-color: var(--gr90);
`;

const InfoContainer = styled.div`
  margin-left: 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: var(--gr20);
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  background: #fff3d7;
  color: var(--gr40);
  border-radius: 4px;
  padding: 4px 6px;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 2px;
`;

const Rating = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const Badge = styled.span`
  background: var(--gr70);
  color: var(--gr40);
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 11px;
  font-weight: 500;
`;

const Description = styled.p`
  color: var(--gr50);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
