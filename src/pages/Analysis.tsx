import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Analysis = () => {
  return (
    <div>
      <Header
        title="성향분석"
        showSearchIcon={true}
        showNotificationIcon={true}
      />
      <main className="content">
        <Link to={'/analysis-detail'}>성향분석 결과 페이지</Link>
      </main>
    </div>
  );
};

export default Analysis;
