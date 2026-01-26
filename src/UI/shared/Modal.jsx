import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { IoMdClose } from 'react-icons/io';
import useKey from '../../hooks/useKey';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const growIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--backdrop-color);
  animation: ${fadeIn} 0.2s ease-out forwards;
  z-index: var(--z-index-overlay);
`;

const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transform-origin: center;

  width: 80%;
  max-width: 40rem;

  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  border: none;
  box-shadow: var(--shadow-md);

  animation: ${growIn} 0.2s ease-out forwards;
  z-index: var(--z-index-modal);

  &::backdrop {
    display: none;
  }
`;
const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const Modal = ({ open, children, closeModal }) => {
  const dialog = useRef(null);

  useEffect(() => {
    const modal = dialog.current;
    if (!modal) return;

    if (open) {
      modal.setAttribute('open', '');
    } else {
      modal.removeAttribute('open');
    }
  }, [open]);

  useKey('Escape', closeModal, open);

  if (!open) return null;

  return createPortal(
    <>
      <Overlay onClick={closeModal} />

      <StyledDialog ref={dialog} onClose={closeModal}>
        <CloseButton onClick={closeModal}>
          <IoMdClose />
        </CloseButton>
        {children}
      </StyledDialog>
    </>,
    document.getElementById('modal'),
  );
};

export default Modal;
