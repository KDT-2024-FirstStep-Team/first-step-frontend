import styled from 'styled-components';
import BestCommunityCard from './BestCommunityCard';
import CategoryHeader from '../shared/CategoryHeader';

const BestCommunity = () => {
  return (
    <>
      <CategoryHeader title="커뮤니티 베스트"></CategoryHeader>
      <BestCommunityCardsContainer>
        {communityData.map((item, index) => (
          <BestCommunityCard
            key={index}
            name={item.name}
            title={item.title}
            content={item.content}
            date={item.date}
          />
        ))}
      </BestCommunityCardsContainer>
    </>
  );
};

interface CommunityData {
  name: string;
  title: string;
  content: string;
  date: Date;
}

const communityData: CommunityData[] = [
  {
    name: '행복한 신부',
    title: '파혼할까 고민입니다..',
    content:
      '안녕하세요. 이런 글을 올리게 될 줄은 몰랐는데, 요즘 정말 고민이 많아져서 여러분의 조언을 듣고 싶습니다. 저를 도와주시면 정말 감사하겠어요.',
    date: new Date('2024-11-04')
  },
  {
    name: '슬픈 신랑',
    title: '결혼식 준비가 너무 힘들어요.',
    content:
      '안녕하세요. 결혼식 준비가 생각보다 너무 어렵고 스트레스가 많습니다. 조언 부탁드립니다.',
    date: new Date('2024-10-30')
  },
  {
    name: '기쁜 친구',
    title: '친구 결혼식에서 축사를 해야 합니다.',
    content:
      '안녕하세요. 친구 결혼식에서 축사를 해야 하는데 긴장이 많이 됩니다. 어떻게 하면 좋을까요?',
    date: new Date('2024-10-25')
  }
];

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
