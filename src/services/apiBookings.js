import { supabase } from './supabase';

const allowedSortFields = ['startDate', 'totalPrice'];

export const getBookings = async ({ queryKey }) => {
  const [, { filter, sortBy }] = queryKey;
  let query = supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests:guestId(fullName, email)',
    );

  if (filter) {
    query = query[filter.method || 'eq'](filter.field, filter.value);
  }

  if (allowedSortFields.includes(sortBy.field)) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });
  }

  const { data: bookings, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }

  return bookings;
};
