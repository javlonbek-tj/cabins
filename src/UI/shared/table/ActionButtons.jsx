import styled from 'styled-components';

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.8rem;

  & svg {
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--color-grey-500);
  }

  &:disabled {
    svg {
      opacity: 0.6;
      cursor: default;
    }
  }
`;
