import BackHeader from '@/components/BackHeader';
import HeartTab from '@/components/HeartTab';
import NotificationBanner from '@/components/NotificationBanner';
import { useState } from 'react';

const MyHeart = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <BackHeader title="내 하트" />
      <main className="content">
        <NotificationBanner
          src="/icons/notification-heart.svg"
          alt="Heart"
          text="하트 충전하고 추가 적립 혜택 받기"
          path="/buy"
        />
        <HeartTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </>
  );
};

export default MyHeart;
