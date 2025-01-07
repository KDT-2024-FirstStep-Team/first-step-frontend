import BestContentBanner from './components/BestContentBanner';
import BestCommunity from './components/BestCommunity/BestCommunity';
import CardBanner from './components/CardBanner';
import HomeHeader from './components/HomeHeader';

async function fetchBestPost() {
  const res = await fetch('http://localhost:8080/home/best-post');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const bestPost = await fetchBestPost();
  console.log(bestPost);

  return (
    <div className="content">
      <HomeHeader />
      <BestContentBanner />
      <BestCommunity bestPost={bestPost} />
      <CardBanner
        userGuideSmallText="쀼의 세계가 처음이라면?"
        userGuideBigText="실제 쀼가 알려주는 사용설명서"
      />
    </div>
  );
}
