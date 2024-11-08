import React from 'react';
import { FileUploadRegion } from '../FileUploadRegion';
import { expectError } from '../../../../TestUtils';

const ErrorDropdownTest = () => {
  return <FileUploadRegion children></FileUploadRegion>;
};

describe('DropdownError tests', () => {
  it('Test wrong children to the FileUploadRegion should display an error', () => {
    expectError(
      <ErrorDropdownTest />,
      'The <FileUploadRegion.Control> subcomponent is required to render the component.'
    );
  });
});
