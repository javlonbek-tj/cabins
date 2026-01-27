import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: ${({ columns = '20rem 1.2fr 1fr' }) => columns};
  align-items: center;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  color: var(--color-grey-700);
  font-weight: 500;
`;

const FormRow = ({ label, children }) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledFormRow>
  );
};

export default FormRow;
