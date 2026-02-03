import styled from 'styled-components';
import { DataItem, Row } from '../../UI/shared';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { format, isToday } from 'date-fns';
import { formatCurrency, formatDistanceFromNow } from '../../utils';

const StyledCard = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const CardHeader = styled(Row)`
  width: 100%;
  background-color: var(--color-brand-500);
  color: var(--color-grey-100);
  padding: 1.8rem 4rem;
  font-size: 1.8rem;

  & div {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    font-weight: 600;
  }

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const CardBody = styled(Row)`
  padding: 3.2rem 4rem 1.2rem;
  gap: 2.4rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  & img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Price = styled(Row)`
  background-color: var(--color-yellow-100);
  padding: 1.2rem 2.4rem;

  background-color: ${({ $isPaid }) =>
    $isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${({ $isPaid }) =>
    $isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & svg {
    color: var(--color-red-700);
  }
`;

const Footer = styled.footer`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

export const BookingDataBox = ({ booking }) => {
  const {
    numNights,
    startDate,
    endDate,
    numGuests,
    observations,
    hasBreakfast,
    totalPrice,
    cabinPrice,
    extrasPrice,
    isPaid,
    created_at,
    guests: { fullName: guestName, countryFlag, country, email, nationalID },
    cabins: { name },
  } = booking;

  return (
    <StyledCard>
      <CardHeader>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin {name}
          </p>
        </div>
        <p>
          {format(new Date(startDate), 'EEE, MMM, dd, yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </CardHeader>
      <CardBody $direction='vertical'>
        <Guest>
          {countryFlag && <img src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label='Observations'
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label='Breakfast included?'>
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price $isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice,
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
        </Price>

        <Footer>
          <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
        </Footer>
      </CardBody>
    </StyledCard>
  );
};
