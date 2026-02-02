import { useSearchParams } from 'react-router';
import { CabinRow } from './index';
import { FullPageSpinner, ErrorFallback, Table } from '../../UI/shared';

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
  const sortValue = searchParams.get('sort-by') || 'created_at-desc';

  const [field, direction] = sortValue.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = [...filteredCabins].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (typeof aVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }

    return (aVal - bVal) * modifier;
  });

  return (
    <Table
      items={sortedCabins}
      render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
    >
      <div></div>
      <div>Cabin</div>
      <div>Capacity</div>
      <div>Price</div>
      <div>Discount</div>
      <div></div>
    </Table>
  );
};
