import BestContentBanner from '@/components/BestContentBanner';
import HomeHeader from '@/components/HomeHeader';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <HomeHeader /> {/* 상단에 고정된 헤더 */}
      <Content>
        <BestContentBanner />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin-top: 64px;
  height: calc(100vh - 64px - 86px);
  overflow-y: auto;
`;

export default Home;
