import React from 'react';
import styled from 'styled-components';
import useCabins from './useCabins';
import CabinRow from './CabinRow';
import { FullPageSpinner } from '../../UI/shared/Spinner';

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
  const { cabins, error, isPending } = useCabins();

  if (isPending) return <FullPageSpinner />;
  if (error) return <div>{error.message}</div>;
  return (
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
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  );
};

export default CabinTable;
