import { Modal } from '../../UI/shared/';
import { CabinForm, useUpdateCabin } from './index';

export const EditCabin = ({ cabin, onClose }) => {
  const { updateCabin, isPending } = useUpdateCabin(onClose);

  if (!cabin) return null;

  const handleSubmit = (data) =>
    updateCabin({ ...data, id: cabin.id, oldImage: cabin.image });

  return (
    <Modal open={!!cabin} closeModal={onClose}>
      <CabinForm
        defaultValues={cabin}
        closeModal={onClose}
        submitLabel={'Update cabin'}
        onSubmit={handleSubmit}
        isPending={isPending}
        ModalTitle='Edit cabin'
      />
    </Modal>
  );
};
