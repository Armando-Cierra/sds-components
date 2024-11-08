import React, { isValidElement, useEffect, useRef, useState } from 'react';
import type { FileUploadUseControlProps } from './types';
import { Button } from '../../../Button';

const FILE_NAME_LENGTH = 5;

export const useControl = ({
  acceptedFiles,
  inputId,
  isDisabled,
  isReadOnly,
  children,
  fileName: controlledFileName,
  defaultFileName,
  onChange,
  onClear,
}: FileUploadUseControlProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let button: React.ReactNode | null = null;

  const acceptedFilesArray = acceptedFiles
    ?.split(',')
    .map((e) => e.trim().replace(/^\s*\./, ''));

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Button) button = item;
    }
  });

  // this helps to check if the defaultFile extension is correct
  const defaultFileNameExtension = defaultFileName?.split('.')[1];
  const [innerFileName, setInnerFileName] = useState<string>(
    defaultFileNameExtension &&
      acceptedFiles?.includes(defaultFileNameExtension)
      ? defaultFileName
      : ''
  );

  const fileName =
    !!controlledFileName === false ? innerFileName : controlledFileName;

  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const fileTypes: Record<string, string> = {
    Audio: 'audio/*',
    Images: 'image/*',
    Video: 'video/*',
  };

  const getFileInputElement = () => {
    return document.getElementById(inputId) as HTMLInputElement;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileIdentifier = file?.name;
    const fileExtension = fileIdentifier?.split('.');
    const fileURL = URL.createObjectURL(file);

    const isValidExtension = acceptedFilesArray?.includes(fileExtension[1]);
    if (!acceptedFiles || isValidExtension) {
      setInnerFileName(fileIdentifier);
      onChange?.({
        ...e,
        file,
        fileName: fileIdentifier,
        fileExtension: fileExtension.pop(),
        fileURL,
      });
    }
  };

  const deleteSelectedFile = () => {
    const fileInput = getFileInputElement();
    fileInput.value = '';
    setInnerFileName('');

    onClear?.({
      file: '',
      fileName: '',
      fileURL: '',
      fileExtension: '',
    });
  };

  const filterKey: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.code === 'Space' && document.activeElement === e.target) {
      const fileInput = getFileInputElement();
      fileInput.click();
    }
  };

  useEffect(() => {
    setButtonWidth(buttonRef.current?.offsetWidth ?? 0);
  }, []);

  const firstFiveLettersOfFile = fileName?.slice(
    0,
    fileName.lastIndexOf('.') - FILE_NAME_LENGTH
  );
  const lastFiveLettersOfFile = fileName?.slice(
    fileName.lastIndexOf('.') - FILE_NAME_LENGTH,
    fileName.length
  );

  const buttonClick = () => {
    const fileInput = getFileInputElement();
    !isDisabled && !isReadOnly && fileInput.click();
  };

  const visualizerClick = () => {
    const fileInput = getFileInputElement();
    fileInput.click();
  };

  return {
    buttonElement: button,
    buttonRef,
    buttonWidth,
    fileName,
    boxRef,
    fileTypes,
    firstFiveLettersOfFile,
    lastFiveLettersOfFile,
    visualizerClick,
    filterKey,
    buttonClick,
    deleteSelectedFile,
    handleChange,
  };
};
