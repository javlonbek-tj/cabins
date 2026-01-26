import styled from 'styled-components';
import Heading from './Heading';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

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

const ConfirmDelete = ({ resourceName }) => {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}?</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <ButtonGroup>
        <Button>Cancel</Button>
      </ButtonGroup>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
