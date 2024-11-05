import CommunityCard from '@/components/CommunityCard';
import Header from '@/components/Header';

const Community = () => {
  return (
    <>
      <Header title="커뮤니티" showDropdownIcon={false} />
      <CommunityCard
        title="파혼할까 고민 중입니다."
        content="안녕하세요. 이런 글을 올리게 될 줄은 몰랐는데, 요즘 정말 고민이 많아져서 여러분의 조언을 듣고 싶습니다. 결혼 준비를 하면서 생각하지도 못했던 문제들이 하나둘씩 쌓이기 시작했어요. 어떡하면 좋을까요?"
        username="행복한 신부"
        date={new Date('2024-09-12')}
        likes={30}
        comments={10}
      />
    </>
  );
};

export default Community;
