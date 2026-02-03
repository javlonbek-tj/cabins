import { HiOutlineEye, HiPencil, HiTrash } from 'react-icons/hi';
import { ActionButtons, TableRow, Tag } from '../../UI/shared';
import styled from 'styled-components';
import {
  formatCurrency,
  formatDistanceFromNow,
  statusToTagName,
} from '../../utils';
import { format, isToday } from 'date-fns';
import { Link } from 'react-router';

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

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const BookingRow = ({ booking }) => {
  return (
    <TableRow role='row'>
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
      <Tag $type={statusToTagName[booking.status]}>{booking.status}</Tag>
      <Amount>{formatCurrency(booking.totalPrice)}</Amount>
      <ActionButtons>
        <StyledLink to={`/bookings/${booking.id}`}>
          <HiOutlineEye />
        </StyledLink>

        <StyledLink>
          <HiPencil />
        </StyledLink>

        <StyledLink>
          <HiTrash />
        </StyledLink>
      </ActionButtons>
    </TableRow>
  );
};
