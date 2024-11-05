import BackHeader from '@/components/BackHeader';
import NotificationBanner from '@/components/NotificationBanner';

const MyHeart = () => {
  return (
    <>
      <BackHeader title="내 하트" />
      <NotificationBanner
        src="/icons/notification-heart.svg"
        alt="Heart"
        text="하트 충전하고 추가 적립 혜택 받기"
        path="/buy"
      />
    </>
  );
};

export default MyHeart;
