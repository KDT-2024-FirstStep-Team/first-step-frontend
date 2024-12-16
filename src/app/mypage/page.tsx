import BackHeader from '../components/BackHeader';
import CardBanner from '../components/CardBanner';

export default function MyPage() {
  return (
    <>
      <BackHeader title="마이페이지" />
      <main className="content">
        <CardBanner location="mypage" numberOfBbu={20} />
      </main>
    </>
  );
}
