import styled from 'styled-components';
import Heading from './Heading';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { InlineSpinner } from './Spinner';

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  & p {
    color: var(--color-grey-500);
  }
`;

const DeleteButton = styled(Button)`
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmDelete = ({ resourceName, closeModal, isPending, onDelete }) => {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}?</Heading>
      <p>
        Are you sure you want to delete {resourceName} permanently? <br />
        This action cannot be undone.
      </p>
      <ButtonGroup>
        <Button variation="secondary" onClick={closeModal} disabled={isPending}>
          Cancel
        </Button>
        <DeleteButton
          variation="danger"
          disabled={isPending}
          onClick={onDelete}
        >
          {isPending ? <InlineSpinner /> : 'Delete'}
        </DeleteButton>
      </ButtonGroup>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
