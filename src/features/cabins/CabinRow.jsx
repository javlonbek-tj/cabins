import { useState } from 'react';
import styled from 'styled-components';
import { DeleteCabin, EditCabin, useCreateCabin, useDuplicateCabin } from '.';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { HiSquare2Stack } from 'react-icons/hi2';

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
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--color-grey-500);
  }

  &:disabled {
    svg {
      opacity: 0.6;
      cursor: default;
    }
  }
`;

export const CabinRow = ({ cabin }) => {
  const [cabinToEdit, setCabinToEdit] = useState(null);
  const [cabinToDelete, setCabinToDelete] = useState(null);
  const { duplicateCabin, isPending } = useDuplicateCabin();

  const handleDuplicate = (cabin) => {
    duplicateCabin({ ...cabin, name: `Copy of ${cabin.name}` });
  };
  return (
    <>
      <StyledCabinRow>
        <Img src={cabin.image} />
        <div>{cabin.name}</div>
        <div>{cabin.maxCapacity}</div>
        <div>{cabin.regularPrice}</div>
        <div>{cabin.discount}</div>
        <ActionButtons disabled={isPending}>
          <HiSquare2Stack onClick={() => handleDuplicate(cabin)} />
          <HiPencil onClick={() => setCabinToEdit(cabin)} />
          <HiTrash onClick={() => setCabinToDelete(cabin)} />
        </ActionButtons>
      </StyledCabinRow>
      <EditCabin cabin={cabinToEdit} onClose={() => setCabinToEdit(null)} />

      <DeleteCabin
        cabin={cabinToDelete}
        onClose={() => setCabinToDelete(null)}
      />
    </>
  );
};
