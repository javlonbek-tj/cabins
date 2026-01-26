import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const useDeleteCabin = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isPending } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      onSuccessCallback?.();
    },
    onError: () => {
      toast.error('Cabin could not be deleted');
    },
  });

  return { deleteCabin, isPending };
};

export default useDeleteCabin;
