import { useState } from 'react';
import styled from 'styled-components';
import { HiSquare2Stack } from 'react-icons/hi2';

import { DeleteCabin, EditCabin, useDuplicateCabin } from '.';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { TableRow, ActionButtons } from '../../UI/shared';

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
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
      <TableRow>
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
      </TableRow>
      <EditCabin cabin={cabinToEdit} onClose={() => setCabinToEdit(null)} />

      <DeleteCabin
        cabin={cabinToDelete}
        onClose={() => setCabinToDelete(null)}
      />
    </>
  );
};
