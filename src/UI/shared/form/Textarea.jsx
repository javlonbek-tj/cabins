import styled from 'styled-components';
import { FormRow } from './FormRow';
import { Label } from './Label';
import { InputError } from './Input';

const StyledTextarea = styled.textarea`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`;

export const Textarea = ({ label, id, error, ...props }) => {
  return (
    <FormRow>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea id={id} {...props} />
      {error && <InputError>{error}</InputError>}
    </FormRow>
  );
};
