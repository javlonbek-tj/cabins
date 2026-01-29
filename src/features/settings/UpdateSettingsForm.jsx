import { useSettings } from './';
import { ErrorFallback } from '../../UI/ErrorFallback';
import { Form, FormRow, FullPageSpinner, Input } from '../../UI/shared';

export const UpdateSettingsForm = () => {
  const { settings, error, isPending } = useSettings();

  if (isPending) return <FullPageSpinner />;

  if (error) return <ErrorFallback title='Failed to load settings' />;

  return (
    <Form maxWidth='60rem'>
      <FormRow columns='20rem 1fr'>
        <Input
          type='number'
          label='Minimum nights/booking'
          id='minBookingLength'
          defaultValue={settings.minBookingLength}
        />
      </FormRow>
      <FormRow columns='20rem 1fr'>
        <Input
          type='number'
          label='Maximum nights/booking'
          id='maxBookingLength'
          defaultValue={settings.maxBookingLength}
        />
      </FormRow>
      <FormRow columns='20rem 1fr'>
        <Input
          type='number'
          label='Maximum guests/booking'
          id='maxGuestsLength'
          defaultValue={settings.maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow columns='20rem 1fr'>
        <Input
          type='number'
          label='Breakfast price'
          id='breakfastPrice'
          defaultValue={settings.breakfastPrice}
        />
      </FormRow>
    </Form>
  );
};
