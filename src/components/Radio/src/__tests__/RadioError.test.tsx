import React from 'react';
import { Radio } from '../Radio';
import { expectError } from '../../../../TestUtils';

const NotValidRadioTest = () => {
  return (
    <Radio labelPosition="after">
      <h1>Hello World</h1>
    </Radio>
  );
};

describe('RadioError test', () => {
  it('Should be rendering the error when the children is not correct.', () => {
    expectError(
      <NotValidRadioTest />,
      'The <Radio.Control> subcomponent is required to render the component'
    );
  });
});
