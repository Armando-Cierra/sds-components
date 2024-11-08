import React from 'react';
import { FileUploadInput } from '../FileUploadInput';
import { expectError } from '../../../../TestUtils';

const ErrorDropdownTest = () => {
  return <FileUploadInput children></FileUploadInput>;
};

describe('DropdownError tests', () => {
  it('Test wrong children to the FileUploadInput should display an error', () => {
    expectError(
      <ErrorDropdownTest />,
      'The <FileUploadInput.Control> subcomponent is required to render the component.'
    );
  });
});
