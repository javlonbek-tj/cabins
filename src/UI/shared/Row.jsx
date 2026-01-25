import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div.attrs((props) => ({
  direction: props.direction || 'horizontal',
}))`
  display: flex;

  ${(props) =>
    props.direction === 'horizontal' &&
    `
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.direction === 'vertical' &&
    `
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

const Row = ({ children, direction }) => {
  return <StyledRow direction={direction}>{children}</StyledRow>;
};

export default Row;
