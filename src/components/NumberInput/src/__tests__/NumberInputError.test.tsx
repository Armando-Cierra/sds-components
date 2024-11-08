import React from 'react';
import { NumberInput } from '../NumberInput';
import { expectError } from '../../../../TestUtils';

const NumberInputErrorTest = () => {
  return <NumberInput>Hello</NumberInput>;
};

describe('NumberInputError tests', () => {
  it('Should render the hasError fallback of the component by using a not expected children content', () => {
    expectError(
      <NumberInputErrorTest />,
      'The <NumberInput.Control /> subcomponent is required to render the component'
    );
  });
});
