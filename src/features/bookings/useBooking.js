import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services';

export const useBooking = () => {
  const { bookingId } = useParams();
  const {
    data: booking,
    error,
    isPending,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: getBooking,
  });

  return { booking, error, isPending };
};
