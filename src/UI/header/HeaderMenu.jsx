import styled from 'styled-components';
import { ButtonIcon } from '../shared';
import { HiOutlineMoon, HiOutlineUser } from 'react-icons/hi2';

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
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiOutlineMoon />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
