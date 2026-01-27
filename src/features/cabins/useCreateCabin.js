import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createCabin as createdCabinApi } from '../../services/apiCabins';

export const useCreateCabin = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending } = useMutation({
    mutationFn: createdCabinApi,
    onSuccess: () => {
      toast.success('New cabin is successfully created ');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      onSuccessCallback?.();
    },
    onError: () => {
      toast.error('Cabin could not be created');
    },
  });

  return { createCabin, isPending };
};
