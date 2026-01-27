import styled from 'styled-components';

const sizes = {
  h1: '2.8rem',
  h2: '2.5rem',
  h3: '2.1rem',
  h4: '1.8rem',
  h5: '1.5rem',
  h6: '1.3rem',
};

export const Heading = styled.h1`
  font-size: ${({ as = 'h1' }) => sizes[as]};
  font-weight: 600;
  line-height: 1.4;
`;
