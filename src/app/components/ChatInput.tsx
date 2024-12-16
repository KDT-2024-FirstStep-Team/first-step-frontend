import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const sendIcon = '/icons/send.svg';

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
          content: newComment.trim(),
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

  return (
    <InputContainer>
      <TextArea
        ref={textareaRef}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="메시지를 입력하세요..."
        onInput={() => {
          if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
          }
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitComment();
          }
        }}
      />
      <SendIcon
        src={sendIcon}
        alt="전송"
        onClick={submitComment}
        disabled={!newComment.trim()} // 입력값 없을 때 비활성화
      />
    </InputContainer>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  border-radius: 12px 12px 0px 0px;
  border-top: 0.5px solid var(--gr70);
  background: var(--gr100);
  display: flex;
  align-items: center;
  padding: 8px 20px 42px 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(62, 68, 78, 0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  border: none;
  border-radius: 40px;
  background: var(--gr90);
  font-size: 16px;
  outline: none;
  margin-right: 10px;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  line-height: 16px;
  flex-grow: 1;
  color: var(--gr30);

  &::placeholder {
    color: var(--gr70);
  }
`;

const SendIcon = styled.img<{ disabled: boolean }>`
  width: 24px;
  height: 24px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
`;
