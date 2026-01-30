import { useSearchParams } from 'react-router';
import styled from 'styled-components';
import { CabinRow } from './index';
import { FullPageSpinner, ErrorFallback } from '../../UI/shared';

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

export const CabinTable = ({ cabins, isLoadingCabins, error }) => {
  const [searchParams] = useSearchParams();

  if (isLoadingCabins) return <FullPageSpinner />;

  if (error)
    return <ErrorFallback title='Failed to load cabins' error={error} />;

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortValue = searchParams.get('sort-by') || 'created_at-asc';

  const [field, direction] = sortValue.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (typeof aVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }

    return (aVal - bVal) * modifier;
  });

  return (
    <>
      <Table role='table'>
        <TableHead role='header'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHead>

        {sortedCabins.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </Table>
    </>
  );
};
