import { Filter, SortBy, TableOperations } from '../../UI/shared';

export const BookingTableOperations = () => {
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Checked out', value: 'checked-out' },
    { label: 'Checked in', value: 'checked-in' },
    { label: 'Unconfirmed', value: 'unconfirmed' },
  ];

  const sortOptions = [
    { value: 'date-desc', label: 'Sort by date (recent first)' },
    { value: 'date-asc', label: 'Sort by date (earlier first)' },
    { value: 'amount-desc', label: 'Sort by amount (high first)' },
    { value: 'amount-asc', label: 'Sort by amount (low first)' },
  ];

  return (
    <TableOperations>
      <Filter options={filterOptions} filterField="discount" />
      <SortBy options={sortOptions} filterField="sort-by" />
    </TableOperations>
  );
};
