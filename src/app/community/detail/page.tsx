'use client';

import { useSearchParams } from 'next/navigation';
import BackHeader from '../../components/BackHeader';

export default function CommunityDetail() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

  return (
    <>
      <BackHeader title="" />
      <main className="content">
        <h1>{postId} 게시물 상세 페이지</h1>
      </main>
    </>
  );
}
