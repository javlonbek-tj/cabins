import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/cabins/apiCabins';

export const useCabins = () => {
  const {
    data: cabins,
    error,
    isPending,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { cabins, error, isPending };
};
