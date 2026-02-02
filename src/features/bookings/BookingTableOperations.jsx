import { Filter, SortBy, TableOperations } from '../../UI/shared';
import { bookingFilterOptions, bookingSortOptions } from '../../utils';

export const BookingTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        options={bookingFilterOptions}
        filterField='status'
        defaultValue={bookingFilterOptions[0].value}
      />
      <SortBy
        options={bookingSortOptions}
        filterField='sort-by'
        placeholder={bookingSortOptions[0].label}
        defaultValue={bookingSortOptions[0].value}
      />
    </TableOperations>
  );
};
