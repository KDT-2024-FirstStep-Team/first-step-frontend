import BackHeader from '@/components/BackHeader';
import { Link } from 'react-router-dom';

const Mypage = () => {
  return (
    <>
      <BackHeader title="마이페이지" />
      <main className="content">
        <Link to={'/myheart'}>보유 하트</Link>
      </main>
    </>
  );
};
export default Mypage;
