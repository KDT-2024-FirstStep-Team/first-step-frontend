import React from 'react';

interface OtherChatProps {
  message?: string;
  time: string;
  name?: string;
  avatar?: string | null;
  image?: string | null;
}

const OtherChat: React.FC<OtherChatProps> = ({
  message = '',
  time,
  name = '상대방',
  avatar = null,
  image = null,
}) => {
  const defaultAvatar = '/icons/profile.svg';

  return (
    <div style={styles.messageWrapper}>
      <div style={styles.messageProfile}>
        <img
          src={avatar || defaultAvatar}
          alt="프로필 이미지"
          style={styles.messageOtherLogo}
        />
        <div style={styles.messageTextLabel}>{name}</div>
      </div>
      <div style={styles.messageContent}>
        <div style={styles.messageRow}>
          <div style={styles.messageOther}>
            {image ? (
              <img src={image} alt="이미지" style={styles.messageImage} />
            ) : (
              <div style={styles.messageText}>{message}</div>
            )}
          </div>
          <div style={styles.messageTime}>{time}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '18px',
    marginLeft: '20px',
    position: 'relative',
    maxWidth: '100%',
  } as React.CSSProperties,

  messageProfile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  } as React.CSSProperties,

  messageOtherLogo: {
    width: '32px',
    height: '32px',
    marginRight: '8px',
    borderRadius: '50%',
  } as React.CSSProperties,

  messageTextLabel: {
    color: 'var(--gr30)',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '100%',
  } as React.CSSProperties,

  messageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  } as React.CSSProperties,

  messageRow: {
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  } as React.CSSProperties,

  messageOther: {
    display: 'inline-block',
    borderRadius: '2px 20px 20px 20px',
    background: 'var(--gr90)',
    color: 'var(--gr100)',
    padding: '12px 14px',
    marginRight: '6px',
    maxWidth: '278px',
    wordWrap: 'break-word',
  } as React.CSSProperties,

  messageText: {
    color: 'var(--gr30)',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '130%',
  } as React.CSSProperties,

  messageImage: {
    maxWidth: '100%',
    maxHeight: '200px',
    borderRadius: '8px',
    marginTop: '5px',
  } as React.CSSProperties,

  messageTime: {
    color: 'var(--gr50)',
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '100%',
    alignSelf: 'flex-end',
    marginBottom: '2px',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
};

export default OtherChat;
