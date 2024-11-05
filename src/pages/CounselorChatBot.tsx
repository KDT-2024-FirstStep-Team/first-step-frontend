import React from 'react';
import BackHeader from '@/components/BackHeader';
import Chat from '@/components/Chat';

const CounselorChatBot: React.FC = () => {
  const messages = [
    {
      time: '오후 3:21',
      message:
        '요즘 너무 남편한테 스트레스를 받아요... 뭘 해도 짜증이 나는 거 같아요.',
      image: null,
    },
    {
      time: '오후 3:22',
      message: '잘 모르겠어요. 너무 답답해요..',
      image: null,
    },
  ];

  return (
    <>
      <BackHeader title="쀼 챗봇" />
      <main className="content">
        {messages.map((msg, index) => (
          <Chat
            key={index}
            time={msg.time}
            message={msg.message}
            image={msg.image}
          />
        ))}
      </main>
    </>
  );
};

export default CounselorChatBot;
