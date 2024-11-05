import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  path?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  backgroundColor = 'var(--pr10)',
  textColor = 'var(--gr100)',
  path,
  onClick,
  disabled = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      if (path) {
        navigate(path);
      } else if (onClick) {
        onClick();
      }
    }
  };

  return (
    <ButtonContainer
      $backgroundColor={disabled ? 'var(--pr30)' : backgroundColor}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <ButtonText $textColor={disabled ? 'var(--gr100)' : textColor}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ $backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  transition: background-color 0.3s;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ButtonText = styled.span<{ $textColor: string }>`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.$textColor};
`;

export default Button;
