import styled from 'styled-components';
import useCabins from './useCabins';
import CabinRow from './CabinRow';
import { FullPageSpinner } from '../../UI/shared/Spinner';
import { useState } from 'react';
import Modal from '../../UI/shared/Modal';
import ConfirmDelete from '../../UI/shared/ConfirmDelete';
import useDeleteCabin from './useDeleteCabin';
import Button from '../../UI/shared/Button';
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  padding: 1.6rem 2.4rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-grey-600);
  text-transform: uppercase;
  font-weight: 600;
`;

const CabinTable = () => {
  const { cabins, error, isPending: isLoadingCabins } = useCabins();
  const [selectedCabin, setSelectedCabin] = useState(null);
  const { deleteCabin, isPending: isDeleting } = useDeleteCabin(() =>
    setSelectedCabin(null)
  );

  if (isLoadingCabins) return <FullPageSpinner />;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Table role="table">
        <TableHead role="header">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHead>

        {cabins.map((cabin) => (
          <CabinRow
            key={cabin.id}
            cabin={cabin}
            onDelete={() => setSelectedCabin(cabin)}
          />
        ))}
      </Table>
      <Modal open={!!selectedCabin} closeModal={() => setSelectedCabin(null)}>
        {selectedCabin && (
          <ConfirmDelete
            resourceName={`Cabin ${selectedCabin.name}`}
            closeModal={() => setSelectedCabin(null)}
            onDelete={() => deleteCabin(selectedCabin.id)}
            isPending={isDeleting}
          />
        )}
      </Modal>
    </>
  );
};

export default CabinTable;
