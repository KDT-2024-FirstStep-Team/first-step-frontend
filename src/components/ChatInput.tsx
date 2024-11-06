import React, { useRef, useState } from 'react';
import sendIcon from '/icons/send.svg';

interface ChatInputProps {
  postId: string;
  userId: number;
  nickname: string;
  onCommentSubmitted: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  postId,
  userId,
  nickname,
  onCommentSubmitted,
}) => {
  const [newComment, setNewComment] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submitComment = async () => {
    if (!newComment.trim()) return;

    try {
      // API 호출 예시
      await fetch(`/apiClient/comments/create/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComment,
          writerId: userId,
          boardId: postId,
          nickname,
        }),
      });

      setNewComment('');
      onCommentSubmitted();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const autoScroll = () => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  };

  return (
    <div style={styles.messageInput}>
      <textarea
        ref={textareaRef}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder=""
        style={styles.inputField}
        onInput={autoScroll}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitComment();
          }
        }}
      />
      <img
        src={sendIcon}
        alt="전송"
        style={styles.iconSend}
        onClick={submitComment}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  messageInput: {
    borderRadius: '12px 12px 0px 0px',
    borderTop: '0.5px solid var(--gr70)',
    background: 'var(--gr100)',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px 42px 20px',
    width: '375px',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 20px 0px rgba(62, 68, 78, 0.1)',
  },
  inputField: {
    width: '301px',
    height: '40px',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '40px',
    background: 'var(--gr90)',
    fontSize: '16px',
    outline: 'none',
    marginRight: '10px',
    boxSizing: 'border-box',
    resize: 'none',
    overflowY: 'auto',
    lineHeight: '16px',
    flexGrow: 1,
    color: 'var(--gr30)',
  },
  iconSend: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
};

export default ChatInput;
