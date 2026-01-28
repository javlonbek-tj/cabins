import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCabin as updateCabinApi } from '../../services/cabins/apiCabins';

export const useUpdateCabin = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isPending } = useMutation({
    mutationFn: updateCabinApi,
    onSuccess: () => {
      toast.success('Cabin is successfully updated ');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      onSuccessCallback?.();
    },
    onError: () => {
      toast.error('Cabin could not be updated');
    },
  });

  return { updateCabin, isPending };
};
