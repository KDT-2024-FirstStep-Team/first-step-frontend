import styled from 'styled-components';

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
  buttonText?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  onClose,
  buttonText = '확인',
}) => (
  <ModalOverlay>
    <ModalContent>
      <ModalTitle>{title}</ModalTitle>
      <ModalMessage>{message}</ModalMessage>
      <ModalButton onClick={onClose}>{buttonText}</ModalButton>
    </ModalContent>
  </ModalOverlay>
);

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 334px;
  padding: 30px 28px 24px 28px;
  background: var(--gr100);
  border-radius: 8px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  color: var(--gr30);
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  margin-bottom: 16px;
`;

const ModalMessage = styled.p`
  color: var(--gr50);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 28px;
`;

const ModalButton = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: var(--gr100);
  background-color: var(--pr10);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--pr20);
  }
`;

export default Modal;
