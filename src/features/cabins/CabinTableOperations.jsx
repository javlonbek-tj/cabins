import { Filter, SortBy, TableOperations } from '../../UI/shared';
import { cabinFilterOptions, cabinSortOptions } from '../../utils';

export const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        options={cabinFilterOptions}
        filterField='discount'
        defaultValue={cabinFilterOptions[0].value}
      />
      <SortBy options={cabinSortOptions} filterField='sort-by' />
    </TableOperations>
  );
};
