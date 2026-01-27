import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  font-size: 1.4rem;
  width: ${({ width }) => width || '80rem'};
  overflow: hidden;
`;

export default Form;
