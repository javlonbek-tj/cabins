import { supabase } from './supabase';

export const getBookings = async () => {
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests:guestId(fullName, email)'
    );

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return bookings;
};
