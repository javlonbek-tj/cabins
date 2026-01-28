import { Modal, ConfirmDelete } from '../../UI/shared';
import { useDeleteCabin } from './useDeleteCabin';

export const DeleteCabin = ({ cabin, onClose }) => {
  const { deleteCabin, isPending } = useDeleteCabin(onClose);

  if (!cabin) return null;

  return (
    <Modal open={!!cabin} closeModal={onClose}>
      <ConfirmDelete
        resourceName={`Cabin ${cabin.name}`}
        onDelete={() => deleteCabin(cabin.id)}
        closeModal={onClose}
        isPending={isPending}
      />
    </Modal>
  );
};
