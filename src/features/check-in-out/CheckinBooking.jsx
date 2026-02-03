import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useMoveBack } from '../../hooks';
import { useSettings } from '../settings';
import {
  Button,
  ButtonGroup,
  ButtonText,
  Checkbox,
  ErrorFallback,
  FullPageSpinner,
  Heading,
  Row,
} from '../../UI/shared';
import {
  BookingDataBox,
  HeadingGroup,
  StyledBooking,
  useBooking,
} from '../bookings';
import styled from 'styled-components';
import { formatCurrency } from '../../utils';
import { useState } from 'react';

const Box = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
  box-shadow: var(--shadow-md);
`;

const CheckInButton = styled(Button)`
  &:disabled {
    background-color: var(--color-brand-500);
    cursor: default;
  }
`;

export const CheckinBooking = () => {
  const { booking, isPending, error } = useBooking();
  const {
    settings,
    isPending: isPendingSettings,
    error: settingsError,
  } = useSettings();
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [confirmPaid, setConfirmPaid] = useState(false);
  const moveBack = useMoveBack();

  if (isPending || isPendingSettings) return <FullPageSpinner />;

  if (error || settingsError)
    return <ErrorFallback title='Failed to load booking' />;

  if (!booking) return null;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;
  return (
    <StyledBooking $direction='vertical'>
      <Row>
        <HeadingGroup>
          <Heading>Check in booking #{bookingId}</Heading>
        </HeadingGroup>

        <ButtonText onClick={moveBack}>
          <HiOutlineArrowLeft /> <span>Back</span>
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {hasBreakfast && (
        <Box>
          <Checkbox
            id='breakfast'
            checked={addBreakfast}
            onChange={() => setAddBreakfast((add) => !add)}
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          id='confirmPaid'
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
        >
          I confirm that {guests.fullName} has paid the total amount of{' '}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice,
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice,
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        {booking?.status === 'unconfirmed' && (
          <CheckInButton disabled={!confirmPaid}>
            Check in booking #{bookingId}
          </CheckInButton>
        )}
        <Button $variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </StyledBooking>
  );
};
