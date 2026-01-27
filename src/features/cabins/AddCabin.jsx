import React, { useState } from 'react';
import Button from '../../UI/shared/Button';
import Modal from '../../UI/shared/Modal';
import CreateCabinForm from './CreateCabinForm';

const AddCabin = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button size="large" onClick={() => setOpen(true)}>
        Add Cabin
      </Button>
      <Modal open={open} closeModal={() => setOpen(false)}>
        {open && <CreateCabinForm />}
      </Modal>
    </div>
  );
};

export default AddCabin;
