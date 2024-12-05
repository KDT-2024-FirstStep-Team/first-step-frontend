import React from 'react';
import styled from 'styled-components';
import StarIcon from '/icons/star.svg';
import DefaultProfileIcon from '/icons/profile-s.svg';

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
  imageUrl,
}) => {
  return (
    <CardContainer>
      <ProfileImage src={imageUrl || DefaultProfileIcon} alt="Profile" />
      <InfoContainer>
        <Name>{name} 상담사</Name>
        <RatingContainer>
          <RatingBadge>
            <Icon src={StarIcon} alt="Star" />
            <Rating>{rating}</Rating>
          </RatingBadge>
          <Badge>{consultations}회 쀼 상담</Badge>
          <Badge>{badge}</Badge>
        </RatingContainer>
        <Description>{description}</Description>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 375px;
  height: 112px;
  display: flex;
  padding: 20px;
  border: none;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  margin-left: 14px;
  flex: 1;
`;

const Name = styled.div`
  color: var(--gr20);
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
`;

const RatingContainer = styled.div`
  display: flex;
  height: 11px
  align-items: center;
  margin-bottom: 10px;
`;

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  background: #fff3d7;
  color: var(--gr40);
  border-radius: 4px;
  padding: 4px 6px;
  margin-right: 6px;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 2px;
`;

const Rating = styled.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 100%;
`;

const Badge = styled.span`
  background: var(--gr70);
  color: var(--gr40);
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 11px;
  margin-right: 6px;
  font-weight: 500;
  line-height: 100%;
`;

const Description = styled.p`
  color: var(--gr50);
  font-size: 13px;
  font-weight: 400;
  line-height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 243px;
`;

export default Card;
