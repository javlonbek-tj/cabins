import { useState } from 'react';
import styled from 'styled-components';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import { DeleteCabin, EditCabin, useDuplicateCabin } from '.';
import { TableRow, ActionButtons } from '../../UI/shared';
import { formatCurrency } from '../../utils';

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
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
      <TableRow role='row'>
        <Img src={cabin.image} />
        <Cabin>{cabin.name}</Cabin>
        <div>{cabin.maxCapacity}</div>
        <Price>{cabin.regularPrice}</Price>
        {cabin.discount > 0 ? (
          <Discount>{formatCurrency(cabin.discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <ActionButtons $disabled={isPending}>
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
