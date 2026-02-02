import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0.6rem 1.2rem;
  gap: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const nextParams = new URLSearchParams(searchParams);

  const handleNextPage = () => {
    nextParams.set('page', currentPage + 1);
    setSearchParams(nextParams);
  };

  const handlePreviousPage = () => {
    nextParams.set('page', currentPage - 1);
    setSearchParams(nextParams);
  };
  return (
    <StyledPagination>
      <p>
        Showing <span>1</span> to <span>10</span> of <span>150</span> results
      </p>
      <Buttons>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <HiOutlineChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton onClick={handleNextPage}>
          <span>Next</span> <HiOutlineChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};
