import styled from 'styled-components';

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = '20rem 1.2fr 1fr' }) => $columns};
  align-items: center;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
