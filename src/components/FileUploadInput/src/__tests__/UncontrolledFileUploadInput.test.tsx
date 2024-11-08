import React, { ReactNode } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { FileUploadInput } from '../FileUploadInput';
import { getComponent, forEachElement } from '../../../../TestUtils';
import type { FileUploadInputProps } from '../types';

interface TestProps extends Omit<FileUploadInputProps, 'children'> {
  defaultFileName?: string;
  children?: ReactNode;
}

const FileUploadInputTest = ({
  defaultFileName,
  children,
  ...rest
}: TestProps) => {
  return (
    <FileUploadInput {...rest}>
      <FileUploadInput.HelpText>A helptext</FileUploadInput.HelpText>
      <FileUploadInput.Control
        defaultFileName={defaultFileName}
        acceptedFiles=".png"
      >
        {children}
      </FileUploadInput.Control>
      <FileUploadInput.Label>A label</FileUploadInput.Label>
    </FileUploadInput>
  );
};

describe('<FileUploadInput />', () => {
  const fileUploadInputTestId = 'sds_fileUploadInput';
  const fileUploadInputLabelTestId = 'sds_fileUploadInput_label';
  const fileUploadInputHelptextTestId = 'sds_fileUploadInput_helptext';
  const fileUploadInputVisualizerTestId = 'sds_fileUploadInput_boxVisualizer';
  const fileUploadInputInputTestId = 'sds_fileUploadInput_input';
  const valueTestId = 'sds_fileUploadInput_value';
  const clearIconTestId = 'sds_fileUploadInput_clearIcon';

  let firstFile: File;
  let secondFile: File;
  beforeEach(() => {
    firstFile = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    secondFile = new File(['(⌐□_□)'], 'chucknorris.jpg', { type: 'image/jpg' });
  });

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<FileUploadInputTest />);
    const fileUpload = getByTestId(fileUploadInputTestId);
    const label = getByTestId(fileUploadInputLabelTestId);
    const helpText = getByTestId(fileUploadInputHelptextTestId);
    const visualizer = getByTestId(fileUploadInputVisualizerTestId);
    const input = getByTestId(fileUploadInputInputTestId);
    forEachElement([fileUpload, label, helpText, visualizer, input], (el) =>
      expect(el).toBeInTheDocument()
    );
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

    expect(fileName).toBe('chucknorris.png');
  });

  it('Expect non-accepted files not to change the value', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <FileUploadInputTest />
    );

    let input = getByTestId(fileUploadInputInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [secondFile] },
      })
    );
    const value = queryByTestId(valueTestId);
    expect(value).toBeFalsy();
  });

  it('Expect default button nnot to render if a custom button is not passed', () => {
    const { queryByTestId } = getComponent(<FileUploadInputTest />);
    const defaultButton = queryByTestId('sds_button');
    // this means the default button is not rendered
    expect(defaultButton).toBeFalsy();
  });

  it('Expect the defaultFileName to render initially', () => {
    const { getByTestId } = getComponent(
      <FileUploadInputTest defaultFileName="batman.png" />
    );
    const value = getByTestId(valueTestId);
    const fileName = value.innerHTML + value.nextSibling?.textContent;
    expect(fileName).toBe('batman.png');
  });

  it('Expect button to be disabled when the component isDisabled. Also rendering custom button', () => {
    const { getByTestId } = getComponent(
      <FileUploadInputTest isDisabled>
        <FileUploadInput.Button>Upload</FileUploadInput.Button>
      </FileUploadInputTest>
    );
    const button = getByTestId('sds_button');
    expect(button).toHaveClass('sds_button--disabled');
  });

  it('Expect the incorrect defaultFileName extension not to be allowed', () => {
    const { queryByTestId } = getComponent(
      <FileUploadInputTest defaultFileName="app.tsx" isDisabled />
    );
    // this means the value is not being rendered, the placeholder is
    const value = queryByTestId(valueTestId);
    expect(value).toBeFalsy();
  });

  it('Expect the icon to clean the fileName', () => {
    const { getByTestId, queryByTestId } = getComponent(
      <FileUploadInputTest defaultFileName="batman.png" />
    );
    const clearIcon = getByTestId(clearIconTestId);
    fireEvent.click(clearIcon);
    // this means the value is not being rendered, the placeholder is
    const value = queryByTestId(valueTestId);
    expect(value).toBeFalsy();
  });
});
