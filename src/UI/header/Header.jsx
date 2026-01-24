import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from './UserAvatar';

const StyledHeader = styled.header`
  grid-column: 2/-1;
  padding: 1.8rem 4.8rem;
  border-bottom: 1px solid #eeecec;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: end;
`;

const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
