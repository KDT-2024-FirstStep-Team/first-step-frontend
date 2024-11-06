import BackHeader from '@/components/BackHeader';
import { useLocation } from 'react-router-dom';

const CommunityDetail = () => {
  const location = useLocation();
  const { postId } = location.state || {};

  return (
    <>
      <BackHeader title="" />
      <main className="content">
        <h1>{postId} 게시물 상세 페이지</h1>
      </main>
    </>
  );
};

export default CommunityDetail;
