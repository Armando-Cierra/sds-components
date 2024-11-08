import React from 'react';
import { ColorPicker } from '../ColorPicker';
import { expectError } from '../../../../TestUtils';

const ColorPickerErrorTest = () => {
  return <ColorPicker children></ColorPicker>;
};

describe('ColorPickerError test', () => {
  it('Testing wrong children passed to the ColorPicker should display an error', () => {
    expectError(
      <ColorPickerErrorTest />,
      'The <ColorPicker.Control /> subcomponent is required'
    );
  });
});
