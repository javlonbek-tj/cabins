import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete, MdEdit } from 'react-icons/md';
import styled from 'styled-components';

const StyledCabinRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;

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

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.8rem;

  & svg {
    font-size: 1.8rem;
    cursor: pointer;
  }

  & svg:first-child {
    color: var(--color-green-700);
  }

  & svg:nth-child(2) {
    color: var(--color-brand-700);
  }

  & svg:last-child {
    color: var(--color-red-700);
  }
`;

const CabinRow = ({ cabin }) => {
  return (
    <StyledCabinRow>
      <Img src={cabin.image} />
      <div>{cabin.name}</div>
      <div>{cabin.maxCapacity}</div>
      <div>{cabin.regularPrice}</div>
      <div>{cabin.discount}</div>
      <ActionButtons>
        <IoMdAdd />
        <MdEdit />
        <MdDelete />
      </ActionButtons>
    </StyledCabinRow>
  );
};

export default CabinRow;
