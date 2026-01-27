import { Controller, useForm } from 'react-hook-form';
import { useCreateCabin } from './useCreateCabin';
import {
  Button,
  ButtonGroup,
  Form,
  Heading,
  ImagePicker,
  Input,
  Textarea,
} from '../../UI/shared';

const CreateCabinForm = ({ closeModal }) => {
  const { register, handleSubmit, getValues, formState, control } = useForm();
  const { createCabin, isPending } = useCreateCabin(closeModal);
  const { errors } = formState;
  const onSubmit = (data) => {
    createCabin(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as='h2'>Create new cabin</Heading>
      <Input
        label='Cabin name'
        id='name'
        disabled={isPending}
        {...register('name', {
          required: 'This field is required',
        })}
        error={errors.name?.message}
      />
      <Input
        label='Maximum capacity'
        id='maxCapacity'
        type='number'
        inputMode='numeric'
        disabled={isPending}
        {...register('maxCapacity', {
          required: 'This field is required',
          min: {
            value: 1,
            message: 'Capacity should be at least 1',
          },
        })}
        error={errors.maxCapacity?.message}
      />
      <Input
        label='Regular price'
        id='regularPrice'
        type='number'
        inputMode='numeric'
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
      <Input
        label='Discount'
        id='discount'
        type='number'
        defaultValue={0}
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
      <Textarea
        label='Description'
        id='description'
        disabled={isPending}
        {...register('description', {
          required: 'This field is required',
        })}
        error={errors.description?.message}
      />
      <Controller
        name='cabinImage'
        control={control}
        rules={{
          required: 'This field is required',
        }}
        render={({ field }) => {
          return (
            <ImagePicker
              label='Cabin photo'
              id='cabinImage'
              disabled={isPending}
              onChange={field.onChange}
              value={field.value}
              error={errors.cabinImage?.message}
            />
          );
        }}
      />
      <ButtonGroup>
        <Button
          variation='secondary'
          type='button'
          onClick={() => closeModal()}
        >
          Cancel
        </Button>
        <Button disabled={isPending}>Create new cabin</Button>
      </ButtonGroup>
    </Form>
  );
};

export default CreateCabinForm;
