import { useBooking } from './useBooking';
import {
  ErrorFallback,
  FullPageSpinner,
  Heading,
  Row,
  Tag,
} from '../../UI/shared';
import { statusToTagName } from '../../utils';

export const BookingDetails = () => {
  const { booking, isPending, error } = useBooking();

  if (isPending) return <FullPageSpinner />;

  if (error) return <ErrorFallback title="Failed to load booking" />;

  if (!booking) return null;
  return (
    <>
      <Row>
        <div>
          <Heading>Booking #{booking.id}</Heading>
          <Tag type={statusToTagName[booking.status]}>{booking.status}</Tag>
        </div>
      </Row>
    </>
  );
};
