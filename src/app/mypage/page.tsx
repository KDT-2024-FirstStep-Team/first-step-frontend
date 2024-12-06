import Link from 'next/link';
import BackHeader from '../components/BackHeader';

export default function MyPage() {
  return (
    <>
      <BackHeader title="마이페이지" />
      <main className="content">
        <Link href={'/myheart'}>보유 하트</Link>
      </main>
      <h1>쀼</h1>
    </>
  );
}
