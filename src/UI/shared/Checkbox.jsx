import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & input[type='checkbox'] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    cursor: pointer;
    accent-color: var(--color-brand-600);

    &:disabled {
      cursor: not-allowed;
    }
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
      color: var(--color-grey-400);
    }
  }
`;

export const Checkbox = ({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}) => {
  return (
    <StyledCheckbox>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} className={disabled ? 'disabled' : ''}>
        {children}
      </label>
    </StyledCheckbox>
  );
};
