import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { HiChevronDown, HiXMark } from 'react-icons/hi2';

const SelectWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-100);
  cursor: pointer;
  width: 100%;

  & span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    flex: 1;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover .chevron {
    opacity: 0;
  }

  &:hover .clear {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  inset: 0;
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
`;

const ChevronIcon = styled(HiChevronDown)`
  width: 1.6rem;
  height: 1.6rem;
  transition: all 0.2s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 0;
  right: 0;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 0.4rem;
  z-index: var(--z-index-select);
  max-height: 30rem;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 0.8rem;
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  white-space: nowrap;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-brand-100)' : 'transparent'};

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  }
`;

const MeasureText = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
`;

export function Select({
  options,
  value,
  onChange,
  onClear,
  placeholder = 'Select...',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const measureRef = useRef(null);
  const [minWidth, setMinWidth] = useState('20rem');

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    if (!measureRef.current) return;

    const longest = options.reduce((a, b) =>
      b.label.length > a.label.length ? b : a,
    );

    measureRef.current.textContent = longest.label;
    setMinWidth(`${measureRef.current.offsetWidth + 40}px`);
  }, [options]);

  useEffect(() => {
    const close = (e) =>
      !selectRef.current?.contains(e.target) && setIsOpen(false);

    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  function handleSelect(val) {
    onChange(val);
    setIsOpen(false);
  }

  function handleClear(e) {
    e.stopPropagation();
    onClear?.();
  }

  return (
    <>
      <MeasureText ref={measureRef} />
      <SelectWrapper ref={selectRef} width={minWidth}>
        <SelectButton onClick={() => setIsOpen((o) => !o)}>
          <span>{selectedOption?.label || placeholder}</span>

          <IconWrapper>
            {value ? (
              <>
                <ChevronIcon className='chevron' isOpen={isOpen} />
                <ClearButton className='clear' onClick={handleClear}>
                  <HiXMark />
                </ClearButton>
              </>
            ) : (
              <ChevronIcon isOpen={isOpen} />
            )}
          </IconWrapper>
        </SelectButton>

        {isOpen && (
          <DropdownList>
            {options.map((opt) => (
              <DropdownItem
                key={opt.value}
                isSelected={opt.value === value}
                onClick={() => handleSelect(opt.value)}
                disabled={opt.value === value}
              >
                {opt.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </SelectWrapper>
    </>
  );
}
