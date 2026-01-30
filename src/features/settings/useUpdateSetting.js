import { useMutation } from '@tanstack/react-query';
import { updateSetting as updateSettingApi } from '../../services';
import toast from 'react-hot-toast';

export const useUpdateSetting = () => {
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully updated');
    },
    onError: () => {
      toast.error('Setting could not be updated');
    },
  });

  return { isUpdating, updateSetting };
};
