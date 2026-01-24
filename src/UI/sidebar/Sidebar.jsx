import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavMenu from './NavMenu';

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  border-right: 1px solid #eeecec;
  padding: 3.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <NavMenu />
    </StyledSidebar>
  );
};

export default Sidebar;
