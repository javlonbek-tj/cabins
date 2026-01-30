import { useSettings, useUpdateSetting } from './';
import {
  Form,
  FormRow,
  FullPageSpinner,
  Input,
  ErrorFallback,
} from '../../UI/shared';
import styled from 'styled-components';

const Description = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-600);
  line-height: 1.6;
`;

export const UpdateSettingsForm = () => {
  const { settings, error, isPending } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();

  if (isPending) return <FullPageSpinner />;
  if (error)
    return <ErrorFallback title='Failed to load settings' error={error} />;

  const handleUpdate = (e) => {
    const { value, id, defaultValue } = e.target;

    if (!value.trim()) {
      e.target.value = defaultValue;
      return;
    }

    if (!id) return;

    const numValue = Number(value);
    const numDefaultValue = Number(defaultValue);

    if (numDefaultValue === numValue) return;

    updateSetting({ [id]: numValue });
  };

  return (
    <>
      <Description>
        Change a value and click outside the input to save automatically
      </Description>

      <Form maxWidth='60rem'>
        <FormRow columns='20rem 1fr'>
          <Input
            type='number'
            label='Minimum nights/booking'
            id='minBookingLength'
            disabled={isUpdating}
            defaultValue={settings.minBookingLength}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow columns='20rem 1fr'>
          <Input
            type='number'
            label='Maximum nights/booking'
            id='maxBookingLength'
            disabled={isUpdating}
            defaultValue={settings.maxBookingLength}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow columns='20rem 1fr'>
          <Input
            type='number'
            label='Maximum guests/booking'
            id='maxGuestsPerBooking'
            disabled={isUpdating}
            defaultValue={settings.maxGuestsPerBooking}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow columns='20rem 1fr'>
          <Input
            type='number'
            label='Breakfast price'
            id='breakfastPrice'
            disabled={isUpdating}
            defaultValue={settings.breakfastPrice}
            onBlur={handleUpdate}
          />
        </FormRow>
      </Form>
    </>
  );
};
