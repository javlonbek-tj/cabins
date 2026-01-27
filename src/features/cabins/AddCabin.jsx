import { useState } from 'react';
import { Button, Modal } from '../../UI/shared/';
import CreateCabinForm from './CreateCabinForm';

const AddCabin = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button size='large' onClick={() => setOpen(true)}>
        Add Cabin
      </Button>
      <Modal open={open} closeModal={() => setOpen(false)}>
        {open && <CreateCabinForm closeModal={() => setOpen(false)} />}
      </Modal>
    </div>
  );
};

export default AddCabin;
