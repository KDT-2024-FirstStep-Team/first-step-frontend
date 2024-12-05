import React from 'react';

interface ChatProps {
  message?: string;
  time: string;
  image?: string | null;
}

const Chat: React.FC<ChatProps> = ({ message = '', time, image = null }) => {
  return (
    <div style={styles.messageWrapper}>
      <div style={styles.messageTimeUser}>{time}</div>
      <div style={{ ...styles.chat, ...styles.message }}>
        {/* 이미지가 있을 경우 이미지 표시 */}
        {image && (
          <div>
            <img src={image} alt="이미지" style={styles.messageImage} />
          </div>
        )}
        {/* 텍스트 메시지 */}
        {message && <div style={styles.messageText}>{message}</div>}
      </div>
    </div>
  );
};

const styles = {
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '18px',
    marginRight: '20px',
    position: 'relative',
    lineHeight: '150%',
  } as React.CSSProperties,

  chat: {
    borderRadius: '20px 2px 20px 20px',
    background:
      'linear-gradient(135deg, hsla(359, 75%, 72%, 1), hsla(2, 79%, 65%, 1))',
    color: 'var(--gr100)',
    padding: '12px 14px',
    marginLeft: '6px',
    maxWidth: '280px',
  } as React.CSSProperties,

  messageText: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '130%',
    letterSpacing: '-0.16px',
  } as React.CSSProperties,

  messageImage: {
    maxWidth: '100%',
    borderRadius: '8px',
    marginTop: '5px',
  } as React.CSSProperties,

  messageTimeUser: {
    color: 'var(--gr50)',
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '100%',
    alignSelf: 'flex-end',
    marginBottom: '2px',
  } as React.CSSProperties,
};

export default Chat;
