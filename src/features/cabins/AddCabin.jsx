import { useState } from 'react';
import { Button, Modal } from '../../UI/shared/';
import { CabinForm, useCreateCabin } from './index';

export const AddCabin = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  const { createCabin, isPending } = useCreateCabin(closeModal);

  return (
    <div>
      <Button size='large' onClick={() => setOpen(true)}>
        Add Cabin
      </Button>

      <Modal open={open} closeModal={closeModal}>
        {open && (
          <CabinForm
            closeModal={closeModal}
            submitLabel='Create new cabin'
            onSubmit={createCabin}
            isPending={isPending}
            ModalTitle='Add new cabin'
          />
        )}
      </Modal>
    </div>
  );
};
