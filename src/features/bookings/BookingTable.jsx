import { ErrorFallback, FullPageSpinner, Table } from '../../UI/shared';
import { BookingRow, useBookings } from './';

export const BookingTable = () => {
  const { bookings, isPending, error } = useBookings();

  if (isPending) return <FullPageSpinner />;

  if (error) return <ErrorFallback title="Failed to load bookings" />;
  return (
    <>
      <Table
        role="table"
        items={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      >
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table>
    </>
  );
};
