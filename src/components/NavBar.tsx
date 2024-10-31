import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <Nav>
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
  );
};

interface NavItemType {
  name: string;
  path: string;
  activeIcon: string;
  inactiveIcon: string;
}

const navItems: NavItemType[] = [
  {
    name: '홈',
    path: '/',
    activeIcon: '/icons/home-active.png',
    inactiveIcon: '/icons/home-inactive.png'
  },
  {
    name: '상담',
    path: '/consultant',
    activeIcon: '/icons/consultant-active.png',
    inactiveIcon: '/icons/consultant-inactive.png'
  },
  {
    name: '쀼',
    path: '/question',
    activeIcon: '/icons/bbu-active.png',
    inactiveIcon: '/icons/bbu-inactive.png'
  },
  {
    name: '커뮤니티',
    path: '/community',
    activeIcon: '/icons/community-active.png',
    inactiveIcon: '/icons/community-inactive.png'
  }
];

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 86px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  padding: 12px 5px;
  z-index: 1000;
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: auto;

  img {
    width: 24px;
    height: auto;
  }

  span {
    color: ${(props) => (props.$active ? '#EC6560' : '#DCDADC')};
    font-size: 12px;
    font-weight: 500;
  }
`;

export default NavBar;
