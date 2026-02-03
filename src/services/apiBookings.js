import { PAGE_SIZE } from '../utils';
import { supabase } from './supabase';

const allowedSortFields = ['startDate', 'totalPrice'];

export const getBookings = async ({ queryKey }) => {
  const [, { filter, sortBy, page }] = queryKey;
  let query = supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests:guestId(fullName, email)',
      { count: 'exact' },
    );

  // FILTER
  if (filter) {
    query = query[filter.method || 'eq'](filter.field, filter.value);
  }

  // SORT
  if (allowedSortFields.includes(sortBy.field)) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });
  }

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: bookings, count, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }

  return { bookings, count };
};

export const getBooking = async ({ queryKey }) => {
  const [, id] = queryKey;

  const { data: booking, error } = await supabase
    .from('bookings')
    .select('*, cabins(*), guests(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be loaded');
  }

  return booking;
};

export const updateBooking = async (id, obj) => {
  const { data, error } = await supabase
    .from('bookings')
    .update(obj)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  return data;
};
