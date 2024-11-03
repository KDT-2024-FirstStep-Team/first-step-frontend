import BestContentBanner from '@/components/BestContentBanner';
import HomeHeader from '@/components/HomeHeader';
const Home = () => {
  return (
    <div>
      <HomeHeader /> {/* HomeHeader 최상단 배치 */}
      <BestContentBanner />
    </div>
  );
};

export default Home;
