import styled from 'styled-components';
import { HiExclamationTriangle } from 'react-icons/hi2';
import { useNavigate } from 'react-router';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 4.8rem 2.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-red-100);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: var(--color-red-100);
  color: var(--color-red-700);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const ErrorTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-600);
  text-align: center;
  max-width: 50rem;
  margin: 0;
  line-height: 1.6;
`;

const BackButton = styled.button`
  margin-top: 0.8rem;
  padding: 1rem 2rem;
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export const ErrorFallback = ({ error, title = 'Something went wrong' }) => {
  const navigate = useNavigate();
  const errorMessage =
    error?.message || 'An unexpected error occurred. Please try again.';

  return (
    <ErrorContainer>
      <IconWrapper>
        <HiExclamationTriangle />
      </IconWrapper>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <BackButton onClick={() => navigate(-1)}>Go back</BackButton>
    </ErrorContainer>
  );
};
