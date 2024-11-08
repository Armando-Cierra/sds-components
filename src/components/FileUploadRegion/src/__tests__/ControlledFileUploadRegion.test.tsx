import React, { useState } from 'react';
import { FileUploadRegion } from '../FileUploadRegion';
import { getComponent, forEachElement } from '../../../../TestUtils/testsSetup';
import { waitFor, fireEvent } from '@testing-library/react';
import type { FileUploadRegionFileProperties } from '../Control/types';

const ControlledFileUploadRegionTest = ({
  isDisabled,
}: {
  isDisabled?: boolean;
}) => {
  const [files, setFiles] = useState<FileUploadRegionFileProperties[]>([]);

  return (
    <>
      <FileUploadRegion isDisabled={isDisabled}>
        <FileUploadRegion.Label info="Some info">
          I am a label
        </FileUploadRegion.Label>
        <FileUploadRegion.Control
          files={files}
          onChange={(e) => {
            setFiles([...files, ...e.files]);
          }}
          onFileRemove={(id) =>
            setFiles(files.filter((file) => file.fileId !== id))
          }
          isDisabled
          acceptedFiles=".png,.jpg"
          warningMessages={{
            fileSize: <i>Incorrect size</i>,
            invalidFile: <strong>Incorrect extension</strong>,
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

describe('<FileUploadRegion />', () => {
  const fileUploadRegion = 'sds_fileUploadRegion';
  const fileUploadLabel = 'sds_fileUploadRegion_label';
  const fileUploadHelptext = 'sds_fileUploadRegion_helpText';
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

  it('All components should be rendering', () => {
    const { getByTestId } = getComponent(<ControlledFileUploadRegionTest />);
    const fileUploadRegionComponent = getByTestId(fileUploadRegion);
    const label = getByTestId(fileUploadLabel);
    const helptext = getByTestId(fileUploadHelptext);
    forEachElement([fileUploadRegionComponent, label, helptext], (el) =>
      expect(el).toBeInTheDocument()
    );
  });

  it('The file value should be changing in an controlled way ', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <ControlledFileUploadRegionTest />
    );

    let input = getByTestId(fileUploadRegionInputTestId);

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

  it('The file extension and fileSize validation should make the warningMessages appear (extension here)', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <ControlledFileUploadRegionTest />
    );

    let input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile, invalidFile] },
      })
    );

    const values = queryByTestId(valueTestId);
    expect(values).toBeFalsy();
  });

  it('The file extension and fileSize validation should make the warningMessages appear (size here)', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <ControlledFileUploadRegionTest />
    );

    let input = getByTestId(fileUploadRegionInputTestId);

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [firstFile, secondFile, invalidSizeFile] },
      })
    );

    //this means the values are not present (validations working)
    const values = queryByTestId(valueTestId);
    expect(values).toBeFalsy();
  });

  it('Expect remove button click to remove the selected file', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <ControlledFileUploadRegionTest />
    );

    let input = getByTestId(fileUploadRegionInputTestId);

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

  it('Should have a disabled class when passed', () => {
    const { getByTestId } = getComponent(
      <ControlledFileUploadRegionTest isDisabled />
    );
    const fileUploadBox = getByTestId('sds_fileUploadRegion_dropRegion');
    expect(fileUploadBox).toHaveClass('sds_fileUploadRegion--disabled');
  });
});
