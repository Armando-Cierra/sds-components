import React from 'react';
import { TextInput } from '../TextInput';
import { expectError } from '../../../../TestUtils';

const TextInputErrorTest = () => {
  return <TextInput>Something</TextInput>;
};

describe('TextInputError tests', () => {
  it('Should render the hasError fallback of the component by using a not expected children content', () => {
    expectError(
      <TextInputErrorTest />,
      'The <TextInput.Control> subcomponent is required to render the component.'
    );
  });
});
