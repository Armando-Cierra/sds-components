import React from 'react';
import { Dropdown } from '../Dropdown';
import { expectError } from '../../../../TestUtils';

const ErrorDropdownTest = () => {
  return <Dropdown children></Dropdown>;
};

describe('DropdownError tests', () => {
  it('Test wrong children to the dropdown should display an error', () => {
    expectError(
      <ErrorDropdownTest />,
      'No <Dropdown.Control> subcomponent was not found. The Control subcomponent is required.'
    );
  });
});
