import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem 3.6rem;
  font-size: 1.4rem;
  width: ${({ width }) => width || '80rem'};
  overflow: hidden;
`;
