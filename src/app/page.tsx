'use client';

import styled from 'styled-components';
import HomeHeader from './components/HomeHeader';
// import BestContentBanner from '../components/BestContentBanner';
// import BestCommunity from '../components/BestCommunity/BestCommunity';
// import CardBanner from '../components/CardBanner';

export default function Home() {
  return (
    <Container className="content">
      <HomeHeader />
      {/* <BestContentBanner /> */}
      {/* <BestCommunity /> */}
      {/* <CardBanner
        userGuideSmallText="쀼의 세계가 처음이라면?"
        userGuideBigText="실제 쀼가 알려주는 사용설명서"
      /> */}
      <div>홈입니다</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;
