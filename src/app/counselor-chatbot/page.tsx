'use client';

import React, { useState } from 'react';
import BackHeader from '../components/BackHeader';
import Chat from '../components/Chat';
import OtherChat from '../components/OtherChat';
import ChatInput from '../components/ChatInput';
import styled from 'styled-components';

const CounselorChatBot: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      type: 'user',
      time: '오후 3:21',
      message:
        '요즘 너무 남편한테 스트레스를 받아요... 뭘 해도 짜증이 나는 거 같아요.',
      image: null,
    },
    {
      type: 'user',
      time: '오후 3:22',
      message: '잘 모르겠어요. 너무 답답해요..',
      image: null,
    },
    {
      type: 'bot',
      time: '오후 3:23',
      message:
        '스트레스를 많이 받으셨군요. 충분히 그럴 수 있어요, 모두 힘든 시기가 있죠. 잠시 숨을 고르고, 지금의 감정을 이해하는 것부터 시작해보는 건 어떨까요?',
      image: null,
      name: 'AI 쀼',
      avatar: '/icons/profile.svg',
    },
  ]);

  // 사용자 메시지 추가 및 봇 응답 처리
  const handleSendMessage = (message: string) => {
    const newMessage = {
      type: 'user',
      time: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      message,
      image: null,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // 봇 응답
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        time: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        message: '제가 도와드릴 수 있는 부분을 말씀해 주세요.',
        image: null,
        name: 'AI 쀼',
        avatar: '/icons/profile.svg',
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <ChatContainer>
      <BackHeader title="쀼 챗봇" />
      <MainContent>
        {messages.map((msg, index) =>
          msg.type === 'user' ? (
            <Chat
              key={index}
              time={msg.time}
              message={msg.message}
              image={msg.image}
            />
          ) : (
            <OtherChat
              key={index}
              time={msg.time}
              message={msg.message}
              image={msg.image}
              name={msg.name}
              avatar={msg.avatar}
            />
          )
        )}
      </MainContent>
      <ChatInput
        postId="1"
        userId={1}
        nickname="User"
        onCommentSubmitted={(comment) => handleSendMessage(comment)}
      />
    </ChatContainer>
  );
};

export default CounselorChatBot;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  margin-top: 74px;
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
`;
