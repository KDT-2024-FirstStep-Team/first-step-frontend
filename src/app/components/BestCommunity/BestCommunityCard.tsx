import styled from 'styled-components';

interface BestCommunityCardProps {
  name: string;
  title: string;
  content: string;
  date: Date;
}

const BestCommunityCard = ({
  name,
  title,
  content,
  date
}: BestCommunityCardProps) => {
  const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '.');

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Date>{formattedDate}</Date>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  min-width: 296px;
  height: 132px;
  background-color: var(--gr90);
  border-radius: 8px;
  padding: 15px;
`;

const Name = styled.p`
  font-size: 12px;
  color: var(--pr10);
  font-weight: 400;
  letter-spacing: -0.2px;
  margin-top: -2px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--gr30);
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 19px;
  height: 38px;
  color: var(--gr50);
  margin: 4px 0px;
  display: -webkit-box; /* Flexbox 기반 레이아웃을 사용 */
  -webkit-line-clamp: 2; /* 최대 2줄까지만 표시 */
  -webkit-box-orient: vertical; /* 박스 방향을 세로로 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis;
  white-space: normal;
`;

const Date = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #aaaaaa;
`;

export default BestCommunityCard;
