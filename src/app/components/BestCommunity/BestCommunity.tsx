'use client';

import styled from 'styled-components';
import BestCommunityCard from './BestCommunityCard';
import CategoryHeader from '../shared/CategoryHeader';

interface Post {
  postId: number;
  nickname: string;
  title: string;
  content: string;
  registerDate: string;
}

const BestCommunity = ({ bestPost }: { bestPost: Array<Post> }) => {
  return (
    <>
      <CategoryHeader title="커뮤니티 베스트"></CategoryHeader>
      <BestCommunityCardsContainer>
        {bestPost.map((item) => (
          <BestCommunityCard
            key={item.postId}
            name={item.nickname}
            title={item.title}
            content={item.content}
            date={new Date(item.registerDate)}
          />
        ))}
      </BestCommunityCardsContainer>
    </>
  );
};

const BestCommunityCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0px 20px;

  /* 가로 스크롤을 가능하게 하는 설정 */
  overflow-x: auto;
  white-space: nowrap; /* 줄바꿈 방지 */

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }

  /* Firefox에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox용 */
`;

export default BestCommunity;
