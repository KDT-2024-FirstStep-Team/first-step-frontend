import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CommunityCardProps {
  postId: number;
  title: string;
  content: string;
  username: string;
  date: Date;
  likes: number;
  comments: number;
  src?: string;
}

const CommunityCard = ({
  postId,
  title,
  content,
  username,
  date,
  likes,
  comments,
  src
}: CommunityCardProps) => {
  const navigate = useNavigate();
  const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '.');

  const handleCardClick = () => {
    navigate('/community/detail', { state: { postId } });
  };

  return (
    <CardContainer onClick={handleCardClick}>
      {/* 커뮤니티 내용 */}
      <ImageContentWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <InfoContainer>
            <Username>{username}</Username>
            <Date>{formattedDate}</Date>
          </InfoContainer>
        </ContentWrapper>
        {src && (
          <Image>
            <img src={src} alt="Image" />
          </Image>
        )}
      </ImageContentWrapper>

      {/* 좋아요와 댓글 */}
      <StatBoxContainer>
        <StatBox>
          <img src="/icons/likes.svg" alt="Likes" />
          <span>{likes}</span>
        </StatBox>
        <StatBox>
          <img src="/icons/comments.svg" alt="Comments" />
          <span>{comments}</span>
        </StatBox>
      </StatBoxContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  background-color: var(--gr100);
  padding: 18px 21px 0 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0; /* 카드 컨테이너의 하단에 위치 */
    left: 50%; /* 가운데 정렬을 위해 왼쪽에서 시작 */
    transform: translateX(-50%); /* 가운데 정렬 */
    width: 91%; /* 원하는 길이로 설정 */
    border-bottom: 0.5px solid var(--gr70); /* 선의 스타일과 색상 */
  }

  p,
  span {
    letter-spacing: -0.2px;
  }
`;

const ImageContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`;

const Image = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 2px;

  span {
    color: var(--gr60);
    font-weight: 500;
    font-size: 12px;
  }
`;

const StatBoxContainer = styled.div`
  display: flex;
`;

const Title = styled.p`
  color: var(--gr30);
  font-weight: 600;
  font-size: 18px;
  display: -webkit-box; /* Flexbox 기반 레이아웃을 사용 */
  -webkit-line-clamp: 1; /* 최대 1줄까지만 표시 */
  -webkit-box-orient: vertical; /* 박스 방향을 세로로 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis;
  white-space: normal;
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--gr50);
  display: -webkit-box; /* Flexbox 기반 레이아웃을 사용 */
  -webkit-line-clamp: 3; /* 최대 3줄까지만 표시 */
  -webkit-box-orient: vertical; /* 박스 방향을 세로로 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis;
  white-space: normal;
`;

const Username = styled.span`
  margin-right: 8px;
`;

const Date = styled.span``;

const StatBox = styled.div`
  width: 50%;
  height: 50px;
  background-color: var(--gr100);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    color: var(--gr60);
    font-weight: 500;
    font-size: 14px;
  }
`;

export default CommunityCard;
