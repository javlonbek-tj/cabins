import styled from 'styled-components';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  & img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const UserAvatar = () => {
  return (
    <StyledUserAvatar>
      <img src='/default-user.jpg' alt='User' />
      <p>Admin</p>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
