import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getBookings } from '../../services';

export const useBookings = () => {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('status') || 'all';
  const sortByValue = searchParams.get('sort-by') || 'startDate-desc';

  // FILTER
  const filter =
    filterValue === 'all' ? null : { field: 'status', value: filterValue };

  // SORT
  const [field, direction] = sortByValue.split('-');
  const sortBy = { field, direction };

  const {
    data: bookings,
    isPending,
    error,
  } = useQuery({
    queryKey: ['bookings', { filter, sortBy }],
    queryFn: getBookings,
  });

  return { bookings, isPending, error };
};
