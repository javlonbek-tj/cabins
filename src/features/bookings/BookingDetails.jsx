import styled from 'styled-components';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useBooking } from './useBooking';
import { useMoveBack } from '../../hooks';
import {
  Button,
  ButtonGroup,
  ButtonText,
  ErrorFallback,
  FullPageSpinner,
  Heading,
  Row,
  Tag,
} from '../../UI/shared';
import { statusToTagName } from '../../utils';
import { BookingDataBox } from './BookingDataBox';
import { useNavigate } from 'react-router';

export const StyledBooking = styled(Row)`
  gap: 3.2rem;
`;

export const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export const BookingDetails = () => {
  const { booking, isPending, error } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isPending) return <FullPageSpinner />;

  if (error) return <ErrorFallback title='Failed to load booking' />;

  if (!booking) return null;
  return (
    <StyledBooking $direction='vertical'>
      <Row>
        <HeadingGroup>
          <Heading>Booking #{booking?.id}</Heading>
          <Tag $type={statusToTagName[booking.status]}>{booking.status}</Tag>
        </HeadingGroup>

        <ButtonText onClick={moveBack}>
          <HiOutlineArrowLeft /> <span>Back</span>
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {booking?.status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${booking?.id}`)}>
            Check in
          </Button>
        )}
        <Button $variation='danger'>Delete booking</Button>
        <Button $variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </StyledBooking>
  );
};
