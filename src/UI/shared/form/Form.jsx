import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem 3.6rem;
  font-size: 1.4rem;
  max-width: ${({ maxWidth = '80rem' }) => maxWidth};
  overflow: hidden;

  ${({ type = 'regular' }) =>
    type === 'regular' &&
    `
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md)
    `}
`;
