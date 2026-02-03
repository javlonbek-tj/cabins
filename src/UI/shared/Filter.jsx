import { useSearchParams } from 'react-router';
import styled from 'styled-components';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  padding: 0.4rem;
  font-weight: 500;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-100);
`;

const StyledButton = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${({ $active }) => $active && 'var(--color-brand-600)'};
  color: ${({ $active }) => $active && 'var(--color-grey-0)'};

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  }
`;

export const Filter = ({ options, filterField, defaultValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) ?? defaultValue;

  const handleClick = (e) => {
    const value = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set(filterField, value);
    nextParams.set('page', 1);

    setSearchParams(nextParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <StyledButton
          key={option.value}
          value={option.value}
          $active={currentFilter === option.value}
          onClick={handleClick}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </StyledButton>
      ))}
    </StyledFilter>
  );
};
