import React from 'react';
import { Password } from '../../..';
import { expectError } from '../../../../TestUtils';

const PasswordErrorTest = () => {
  return <Password>Something</Password>;
};

describe('PasswordError tests', () => {
  it('Should be rendering the error when the children is not correct.', () => {
    expectError(
      <PasswordErrorTest />,
      'The <Password.Control> subcomponent is required to render the component.'
    );
  });
});
