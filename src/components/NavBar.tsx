import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Nav className="app-container">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            $active={location.pathname === item.path}
          >
            <img
              src={
                location.pathname === item.path
                  ? item.activeIcon
                  : item.inactiveIcon
              }
              alt={item.name}
            />
            <span>{item.name}</span>
          </NavItem>
        ))}
      </Nav>
    </NavContainer>
  );
};

interface NavItem {
  name: string;
  path: string;
  activeIcon: string;
  inactiveIcon: string;
}

const navItems: NavItem[] = [
  {
    name: '홈',
    path: '/',
    activeIcon: '/icons/home-active.svg',
    inactiveIcon: '/icons/home-inactive.svg',
  },
  {
    name: '상담',
    path: '/consultant',
    activeIcon: '/icons/consultant-active.svg',
    inactiveIcon: '/icons/consultant-inactive.svg',
  },
  {
    name: '쀼',
    path: '/question',
    activeIcon: '/icons/bbu-active.svg',
    inactiveIcon: '/icons/bbu-inactive.svg',
  },
  {
    name: '커뮤니티',
    path: '/community',
    activeIcon: '/icons/community-active.svg',
    inactiveIcon: '/icons/community-inactive.svg',
  },
];

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(52px + 34px);
  display: flex;
  justify-content: center;
  background-color: var(--gr100);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 375px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
  background-color: var(--gr100);
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 2px;
    filter: ${(props) => (props.$active ? 'none' : 'grayscale(100%)')};
  }

  span {
    color: ${(props) => (props.$active ? 'var(--pr10)' : 'var(--gr70)')};
    font-size: 12px;
    font-weight: 500;
  }
`;

export default NavBar;
