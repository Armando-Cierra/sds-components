import React from 'react';
import { Switch } from '../Switch';
import { expectError } from '../../../../TestUtils';

const SwitchErrorTest = () => {
  return (
    <Switch labelPosition="top">
      <h1>Hello World</h1>
    </Switch>
  );
};

describe('SwitchError tests', () => {
  it('Should be rendering the error when the children is not correct.', () => {
    expectError(
      <SwitchErrorTest />,
      'The <Switch.Control> subcomponent is required to render the component.'
    );
  });
});
