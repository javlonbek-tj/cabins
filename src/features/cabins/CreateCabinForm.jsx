import React from 'react';

import FormRow from '../../UI/shared/FormRow';
import Input from '../../UI/shared/Input';
import Form from '../../UI/shared/Form';
import Textarea from '../../UI/shared/TextArea';

const CreateCabinForm = () => {
  return (
    <Form>
      <FormRow label="Cabin name">
        <Input id="name" />
      </FormRow>
      <FormRow label="Maximum capacity">
        <Input id="maxCapacity" type="number" />
      </FormRow>
      <FormRow label="Regular price">
        <Input id="regularPrice" type="number" />
      </FormRow>
      <FormRow label="Discount">
        <Input id="discount" type="number" defaultValue={0} />
      </FormRow>
      <FormRow label="Description">
        <Textarea id="description" />
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
