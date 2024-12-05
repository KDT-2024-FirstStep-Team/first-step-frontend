import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <NavText to={'/community'}>전체보기 &gt;</NavText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--gr20);
`;

const NavText = styled(Link)`
  font-size: 12px;
  color: var(--gr50);
  font-weight: 400;
`;

export default CategoryHeader;
