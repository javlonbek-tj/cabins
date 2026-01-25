import React from 'react';
import styled from 'styled-components';

const StyledCabinRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
`;

const CabinRow = ({ cabin }) => {
  return (
    <StyledCabinRow>
      <Img src={cabin.image} />
      <div>{cabin.name}</div>
      <div>{cabin.maxCapacity}</div>
      <div>{cabin.regularPrice}</div>
      <div>{cabin.discount}</div>
      <div>
        <button>edit</button>
      </div>
    </StyledCabinRow>
  );
};

export default CabinRow;
