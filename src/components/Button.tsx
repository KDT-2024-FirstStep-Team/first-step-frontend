import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  path: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  icon,
  backgroundColor = 'var(--pr10)',
  textColor = 'var(--gr100)',
  path,
}) => {
  const navigate = useNavigate();

  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={() => navigate(path)}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColor + 'CC'};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: auto;
  }
`;

const ButtonText = styled.span<{ textColor: string }>`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: ${(props) => props.textColor};
`;

export default CustomButton;
