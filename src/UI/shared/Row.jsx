import React from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs((props) => ({
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

export default Row;
