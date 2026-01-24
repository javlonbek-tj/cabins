import React from 'react';
import { CiDark, CiUser } from 'react-icons/ci';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <CiUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <CiDark />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
