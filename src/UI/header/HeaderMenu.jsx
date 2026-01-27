import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { ButtonIcon } from '../shared';

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
          <MdOutlineDarkMode />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
