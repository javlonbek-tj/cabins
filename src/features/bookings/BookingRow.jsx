import { HiPencil, HiTrash } from 'react-icons/hi';
import { HiSquare2Stack } from 'react-icons/hi2';
import { ActionButtons, TableRow, Tag } from '../../UI/shared';
import styled from 'styled-components';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';
import { format, isToday } from 'date-fns';

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`;

const statusToTagName = {
  unconfirmed: 'blue',
  'checked-in': 'green',
  'checked-out': 'silver',
};

export const BookingRow = ({ booking }) => {
  return (
    <TableRow>
      <Cabin>{booking.cabins.name}</Cabin>
      <Stacked>
        <span>{booking.guests.fullName}</span>
        <span>{booking.guests.email}</span>
      </Stacked>
      <Stacked>
        <span>
          {isToday(new Date(booking.startDate))
            ? 'Today'
            : formatDistanceFromNow(booking.startDate)}{' '}
          &rarr; {booking.numNights} night stay
        </span>
        <span>
          {format(new Date(booking.startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(booking.endDate), 'MMM dd yyyy')}
        </span>
      </Stacked>
      <Tag type={statusToTagName[booking.status]}>{booking.status}</Tag>
      <Amount>{formatCurrency(booking.totalPrice)}</Amount>
      <ActionButtons>
        <HiSquare2Stack />
        <HiPencil />
        <HiTrash />
      </ActionButtons>
    </TableRow>
  );
};
