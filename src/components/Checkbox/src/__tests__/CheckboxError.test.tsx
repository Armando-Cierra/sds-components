import React from 'react';
import { expectError } from '../../../../TestUtils';
import { Checkbox } from '../Checkbox';
import type { CheckboxProps } from '../types';

type TestProps = Omit<CheckboxProps, 'children'>;

const NotValidCheckboxTest: React.FC<TestProps> = ({ ...rest }) => {
  return (
    <Checkbox labelPosition="after" {...rest}>
      <h1>Hello World</h1>
    </Checkbox>
  );
};

describe('Checkbox should be throwing an error when children is invalid', () => {
  it('Should not render the checkbox and throw an error', () => {
    expectError(
      <NotValidCheckboxTest />,
      'No <Checkbox.Control> subcomponent was found. The Control subcomponent is required.'
    );
  });
});
