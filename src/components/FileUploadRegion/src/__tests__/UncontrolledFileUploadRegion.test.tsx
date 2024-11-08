import React from 'react';
import { FileUploadRegion } from '../FileUploadRegion';
import { waitFor, fireEvent } from '@testing-library/react';
import { getComponent } from '../../../../TestUtils';

export const UncontrolledFileUploadRegionTest = () => {
  return (
    <>
      <FileUploadRegion>
        <FileUploadRegion.Label info="Some info">
          I am a label
        </FileUploadRegion.Label>
        <FileUploadRegion.Control
          isDisabled
          acceptedFiles=".png,.jpg"
          warningMessages={{
            fileSize: <i>Incorrect SIZE</i>,
            invalidFile: <strong>Incorrect ext</strong>,
          }}
          fileSizeConfig={{
            fileSizeLimit: 20,
            fileSizeUnit: 'Byte',
          }}
        />
        <FileUploadRegion.HelpText>A helptext</FileUploadRegion.HelpText>
      </FileUploadRegion>
    </>
  );
};

describe('Uncontrolled <FileUploadRegion />', () => {
  const fileUploadRegionInputTestId = 'sds_fileUploadRegion_input';
  const valueTestId = 'sds_fileUploadRegion_fileName';

  let firstFile: File;
  let secondFile: File;
  let invalidFile: File;
  let invalidSizeFile: File;

  const fileNames = ['chucknorris.png', 'elrober.jpg'];

  beforeEach(() => {
    firstFile = new File(['(⌐□_□)'], fileNames[0], { type: 'image/png' });
    secondFile = new File(['(⌐□_□)'], fileNames[1], { type: 'image/jpg' });
    invalidFile = new File(['(⌐□_□)'], 'document.pdf', {
      type: 'application/pdf',
    });
    //surpassing 20b
    const content = '(⌐□_□)';
    let fileContent = '';
    while (fileContent.length < 10) {
      fileContent += content;
    }
    const blob = new Blob([fileContent], { type: 'image/png' });
    invalidSizeFile = new File([blob], 'image.png', { type: 'image/png' });
  });

  it('The file value should be changing in an controlled way ', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledFileUploadRegionTest />
    );

    const input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile] },
      })
    );

    const values = getAllByTestId(valueTestId);
    // this means all the values were added (2)
    const hasInValidValues = fileNames
      .map((fileName, index) => fileName === values[index].textContent)
      .includes(false);
    expect(hasInValidValues).toBe(false);
  });

  it('[UNCONTROLLED] The file extension and fileSize validation should make the warningMessages appear (extension here)', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <UncontrolledFileUploadRegionTest />
    );

    const input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile, invalidFile] },
      })
    );

    const values = queryByTestId(valueTestId);
    expect(values).toBeFalsy();
  });

  it('[UNCONTROLLED] The file extension and fileSize validation should make the warningMessages appear (size here)', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <UncontrolledFileUploadRegionTest />
    );

    const input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile, invalidSizeFile] },
      })
    );

    //this means the values are not present (validations working)
    const values = queryByTestId(valueTestId);
    expect(values).toBeFalsy();
  });

  it('[UNCONTROLLED] Expect remove button click to remove the selected file', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledFileUploadRegionTest />
    );
    const input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile] },
      })
    );

    const button = getAllByTestId('sds_button')[0];
    fireEvent.click(button);
    //this means the values are not present (validations working)
    const values = getAllByTestId(valueTestId);
    expect(values.length).toBe(1);
  });
});
