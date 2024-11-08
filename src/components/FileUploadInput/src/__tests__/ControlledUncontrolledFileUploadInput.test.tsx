import React, { useState } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { FileUploadInput } from '../FileUploadInput';
import { getComponent } from '../../../../TestUtils';
import type { FileUploadInputProps } from '../types';

interface TestProps extends Omit<FileUploadInputProps, 'children'> {
  defaultFileName?: string;
}

const FileUploadInputTest = ({ defaultFileName, ...rest }: TestProps) => {
  const [fileName, setFileName] = useState('');

  return (
    <FileUploadInput {...rest}>
      <FileUploadInput.HelpText>A helptext</FileUploadInput.HelpText>
      <FileUploadInput.Control
        fileName={fileName}
        onChange={(e) => setFileName(e.fileName ?? '')}
        acceptedFiles=".pdf"
      >
        <FileUploadInput.Button iconAfter="upload--fill">
          Upload
        </FileUploadInput.Button>
      </FileUploadInput.Control>
      <FileUploadInput.Label>A label</FileUploadInput.Label>
    </FileUploadInput>
  );
};

describe('<FileUploadInput />', () => {
  const fileUploadInputInputTestId = 'sds_fileUploadInput_input';
  const valueTestId = 'sds_fileUploadInput_value';

  let firstFile: File;
  beforeEach(() => {
    firstFile = new File(['(⌐□_□)'], 'bruce.pdf', { type: 'image/png' });
  });

  it('The file value should be changing in an uncontrolled way ', async () => {
    const { getByTestId } = getComponent(<FileUploadInputTest />);

    let input = getByTestId(fileUploadInputInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile] },
      })
    );

    const value = getByTestId(valueTestId);
    const fileName = value.innerHTML + value.nextSibling?.textContent;

    expect(fileName).toBe('bruce.pdf');
  });
});
