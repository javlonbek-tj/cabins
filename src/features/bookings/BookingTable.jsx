import { Outlet } from 'react-router';
import {
  ErrorFallback,
  FullPageSpinner,
  Pagination,
  Table,
} from '../../UI/shared';
import { PAGE_SIZE } from '../../utils';
import { BookingRow, useBookings } from './';

export const BookingTable = () => {
  const { bookings, isPending, count, error } = useBookings();

  if (isPending) return <FullPageSpinner />;

  if (error) return <ErrorFallback title="Failed to load bookings" />;

  const footer = count > PAGE_SIZE ? <Pagination count={count} /> : null;
  return (
    <>
      <Table
        role="table"
        items={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
        footer={footer}
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
