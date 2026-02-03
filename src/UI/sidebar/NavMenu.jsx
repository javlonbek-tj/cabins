import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-size: 1.8rem;
    padding: 1.2rem 1.2rem 1.2rem 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.2s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-100);
    color: var(--color-grey-900);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const NavMenu = () => {
  const navLinks = [
    {
      path: '/dashboard',
      label: 'Home',
      icon: <HiOutlineHome />,
    },
    {
      path: '/bookings',
      label: 'Bookings',
      icon: <HiOutlineCalendarDays />,
    },
    {
      path: '/cabins',
      label: 'Cabins',
      icon: <HiOutlineHomeModern />,
    },
    {
      path: '/users',
      label: 'Users',
      icon: <HiOutlineUsers />,
    },
    {
      path: '/settings',
      label: 'Settings',
      icon: <HiOutlineCog6Tooth />,
    },
  ];

  return (
    <nav>
      <NavList>
        {navLinks.map((link) => (
          <li key={link.label}>
            <StyledNavLink to={link.path}>
              {link.icon}
              <span>{link.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default NavMenu;
