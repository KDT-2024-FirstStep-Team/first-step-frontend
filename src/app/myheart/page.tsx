'use client';

import { useState } from 'react';
import BackHeader from '../components/BackHeader';
import CardBanner from '../components/CardBanner';
import HeartTab from '../components/HeartTab';
import NotificationBanner from '../components/NotificationBanner';

export default function MyHeart() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <BackHeader title="내 하트" />
      <main className="content">
        <CardBanner numberOfBbu={20} />
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
}
