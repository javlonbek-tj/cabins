import React from 'react';
import styled from 'styled-components';

const sizes = {
  h1: '3rem',
  h2: '2.5rem',
  h3: '2.1rem',
  h4: '1.8rem',
  h5: '1.5rem',
  h6: '1.3rem',
};

const Heading = styled.h1.attrs((props) => ({
  as: props.as || 'h1',
}))`
  font-size: ${({ as }) => sizes[as]};
  font-weight: 600;
  line-height: 1.4;
`;

export default Heading;
