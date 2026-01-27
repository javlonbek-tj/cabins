import styled from 'styled-components';
import { FormRow } from './FormRow';
import { Label } from './Label';

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export const InputError = styled.p`
  font-size: 1.2rem;
  color: var(--color-red-700);
`;

export const Input = ({ label, id, error, ...props }) => {
  return (
    <FormRow>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput id={id} {...props} />
      {error && <InputError>{error}</InputError>}
    </FormRow>
  );
};
