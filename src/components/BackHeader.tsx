import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backIcon from '/icons/back.svg';

interface BackHeaderProps {
  title: string;
}

const BackHeader = ({ title }: BackHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderContainer>
        <BackButton onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" />
        </BackButton>
        <Title>{title}</Title>
      </HeaderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 425px;
  height: 64px;
  display: flex;
  align-items: center;
  background-color: var(--gr100);
  padding: 0 18px;
  position: fixed; /* 상단에 고정 */
  top: 0;
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 6px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--gr20);
  flex-grow: 1;
  text-align: left;
  line-height: 100%;
`;

export default BackHeader;
