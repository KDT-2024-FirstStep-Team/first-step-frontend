import BestCommunity from '@/components/BestCommunity/BestCommunity';
import BestContentBanner from '@/components/BestContentBanner';
import CardBanner from '@/components/CardBanner';
import HomeHeader from '@/components/HomeHeader';

const Home = () => {
  return (
    <div>
      <HomeHeader /> {/* HomeHeader 최상단 배치 */}
      <BestContentBanner />
      <BestCommunity />
      <CardBanner
        userGuideSmallText="쀼의 세계가 처음이라면?"
        userGuideBigText="실제 쀼가 알려주는 사용설명서"
      />
    </div>
  );
};

export default Home;
