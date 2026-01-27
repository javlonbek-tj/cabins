import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;

  ${({ direction = 'horizontal' }) =>
    direction === 'horizontal' &&
    `
      justify-content: space-between;
      align-items: center;
    `}

  ${({ direction = 'horizontal' }) =>
    direction === 'vertical' &&
    `
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
