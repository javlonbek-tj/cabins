import { BookingTable, BookingTableOperations } from '../features/bookings';
import { Heading, Row } from '../UI/shared';

export const Bookings = () => {
  return (
    <>
      <Row>
        <Heading>All Bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
};
