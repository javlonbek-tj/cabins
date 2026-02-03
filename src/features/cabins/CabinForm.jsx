import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  ButtonGroup,
  Form,
  FormRow,
  Heading,
  ImagePicker,
  Input,
  Textarea,
} from '../../UI/shared';

export const CabinForm = ({
  closeModal,
  onSubmit,
  defaultValues = {},
  submitLabel,
  isPending,
  ModalTitle,
}) => {
  const { register, handleSubmit, getValues, formState, control } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} $type='modal'>
      <Heading as='h2'>{ModalTitle}</Heading>
      <FormRow>
        <Input
          label='Cabin name'
          id='name'
          disabled={isPending}
          defaultValue={defaultValues.name}
          {...register('name', {
            required: 'This field is required',
          })}
          error={errors.name?.message}
        />
      </FormRow>
      <FormRow>
        <Input
          label='Maximum capacity'
          id='maxCapacity'
          type='number'
          inputMode='numeric'
          disabled={isPending}
          defaultValue={defaultValues.maxCapacity}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
          error={errors.maxCapacity?.message}
        />
      </FormRow>
      <FormRow>
        <Input
          label='Regular price'
          id='regularPrice'
          type='number'
          inputMode='numeric'
          defaultValue={defaultValues.regularPrice}
          disabled={isPending}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Regular price should be at least 1',
            },
          })}
          error={errors.regularPrice?.message}
        />
      </FormRow>
      <FormRow>
        <Input
          label='Discount'
          id='discount'
          type='number'
          defaultValue={defaultValues.discount || 0}
          inputMode='numeric'
          disabled={isPending}
          {...register('discount', {
            required: 'This field is required',
            valueAsNumber: true,
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than regular price',
          })}
          error={errors.discount?.message}
        />
      </FormRow>
      <FormRow>
        <Textarea
          label='Description'
          id='description'
          defaultValue={defaultValues.description}
          disabled={isPending}
          {...register('description', {
            required: 'This field is required',
          })}
          error={errors.description?.message}
        />
      </FormRow>
      <FormRow>
        <Controller
          name='image'
          control={control}
          rules={{
            required: !defaultValues.image && 'This field is required',
          }}
          render={({ field }) => {
            return (
              <ImagePicker
                label='Cabin photo'
                id='image'
                disabled={isPending}
                onChange={field.onChange}
                defaultImage={defaultValues.image}
                error={errors.image?.message}
              />
            );
          }}
        />
      </FormRow>
      <ButtonGroup>
        <Button
          $variation='secondary'
          type='button'
          onClick={() => closeModal()}
        >
          Cancel
        </Button>
        <Button disabled={isPending}>{submitLabel}</Button>
      </ButtonGroup>
    </Form>
  );
};
