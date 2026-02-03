import styled from 'styled-components';

export const ButtonText = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
