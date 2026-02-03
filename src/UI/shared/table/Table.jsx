import styled from 'styled-components';

export const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  font-size: 1.4rem;
  overflow: hidden;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr' }) =>
    $columns};
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-grey-600);
  text-transform: uppercase;
  font-weight: 600;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns = '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr' }) =>
    $columns};
  align-items: center;
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

export const TableFooter = styled.footer`
  padding: 1rem 2.4rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-600);
`;

export const Table = ({ children, footer, items, render }) => {
  return (
    <>
      <StyledTable role="table">
        <TableHead role="header">{children}</TableHead>

        {items.map(render)}
        {footer && <TableFooter role="footer">{footer}</TableFooter>}
      </StyledTable>
    </>
  );
};
