import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getBookings } from '../../services';
import { PAGE_SIZE } from '../../utils';

export const useBookings = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get('status') || 'all';
  const sortByValue = searchParams.get('sort-by') || 'startDate-desc';
  const page = Number(searchParams.get('page')) || 1;

  // FILTER
  const filter =
    filterValue === 'all' ? null : { field: 'status', value: filterValue };

  // SORT
  const [field, direction] = sortByValue.split('-');
  const sortBy = { field, direction };

  const {
    data = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ['bookings', { filter, sortBy, page }],
    queryFn: getBookings,
  });

  const { bookings, count } = data;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (!isPending && Number.isFinite(pageCount)) {
    if (page < pageCount) {
      queryClient.prefetchQuery({
        queryKey: ['bookings', { filter, sortBy, page: page + 1 }],
        queryFn: getBookings,
      });
    }

    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: ['bookings', { filter, sortBy, page: page - 1 }],
        queryFn: getBookings,
      });
    }
  }

  return { bookings, isPending, count, error };
};
