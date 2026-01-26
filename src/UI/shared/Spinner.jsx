import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div.attrs({
  role: 'status',
  'aria-label': 'loading',
})`
  width: 3.2rem;
  height: 3.2rem;
  border: 3px solid var(--color-grey-200);
  border-top-color: var(--color-brand-600);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const InlineSpinner = styled(Spinner)`
  width: 1.6rem;
  height: 1.6rem;
  border-width: 2px;
`;

const FullPage = styled.div`
  margin: 4.8rem auto;
  display: grid;
  place-items: center;
`;

const FullPageSpinner = () => (
  <FullPage>
    <Spinner />
  </FullPage>
);

export { Spinner, InlineSpinner, FullPageSpinner };
