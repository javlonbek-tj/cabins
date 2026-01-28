import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { duplicateCabin as duplicateCabinApi } from '../../services/cabins/apiCabins';

export const useDuplicateCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: duplicateCabin, isPending } = useMutation({
    mutationFn: duplicateCabinApi,
    onSuccess: () => {
      toast.success('Cabin successfully duplicated');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: () => {
      toast.error('Cabin could not be duplicated');
    },
  });
  return { duplicateCabin, isPending };
};
