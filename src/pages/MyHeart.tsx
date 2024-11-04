import BackHeader from '@/components/BackHeader';
import { Link } from 'react-router-dom';

const MyHeart = () => {
  return (
    <>
      <BackHeader title="내 하트" />
      <Link to={'/buy'}>하트 충전하기</Link>
    </>
  );
};

export default MyHeart;
