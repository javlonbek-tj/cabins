import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 12rem;
  align-self: center;
`;

const Logo = () => {
  return <StyledLogo src='logo-light.png' alt='Logo' />;
};

export default Logo;
