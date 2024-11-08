/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  ReactNode,
  isValidElement,
  useState,
  ChangeEvent,
  DragEvent,
} from 'react';
import { HelpText } from '../../../HelpText';
import type {
  FileUploadRegionFileProperties,
  FileUploadRegionControlProps,
} from './types';
import { partial } from 'filesize';
import uniqid from 'uniqid';

export const useControl = ({
  children,
  files: controlledFiles,
  defaultFileNames,
  acceptedFiles,
  isDisabled,
  fileSizeConfig = {},
  warningMessages = {},
  onChange,
}: FileUploadRegionControlProps) => {
  const { fileSizeLimit = 0, fileSizeUnit = 'Byte' } = fileSizeConfig;
  const { fileSize: fileSizeError, invalidFile: invalidFileError } =
    warningMessages;

  const fileTypes: Record<string, string> = {
    Audio: 'audio/*',
    Images: 'image/*',
    Video: 'video/*',
  };

  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [hasInvalidFiles, setHasInvalidFiles] = useState<ReactNode | undefined>(
    undefined
  );

  const [innerFileNames, setInnerFileNames] = useState<
    FileUploadRegionFileProperties[]
  >(defaultFileNames ?? []);

  const getFileSizeValidation = (fileSize: number): boolean => {
    if (fileSizeLimit) {
      const fileSizeUnitValueInBytes = getFileSizeUnitValueInBytes();
      return fileSizeUnitValueInBytes < fileSize;
    }

    return true;
  };

  const getFileSizeUnitValueInBytes = () => {
    if (fileSizeLimit && fileSizeUnit) {
      const units = {
        Byte: () => fileSizeLimit,
        KB: () => fileSizeLimit * 1024,
        MB: () => fileSizeLimit * Math.pow(1024, 2),
        GB: () => fileSizeLimit * Math.pow(1024, 3),
      };

      return units[fileSizeUnit]();
    }
    return 0;
  };

  const parseFileSize = partial({ base: 2, standard: 'jedec', round: 1 });

  const getFilesObject = (
    files: FileList
  ): FileUploadRegionFileProperties[] => {
    return Array.from(files)?.map((file) => {
      return {
        fileName: file.name,
        fileId: uniqid('sds_file'),
        fileSize: parseFileSize(file.size),
        fileURL: URL.createObjectURL(file),
        fileExtension: file.name.split('.').pop(),
      };
    });
  };

  const validateFiles = (
    files: FileUploadRegionFileProperties[],
    fileSizeInBytes: number[]
  ) => {
    if (!files) return true;

    const filesExtensions = files?.map((file) => file.fileExtension);

    const hasInvalidFileExtensions = acceptedFiles
      ? filesExtensions.some(
          (file) => !acceptedFilesArray?.includes(file as string)
        )
      : false;

    const hasInvalidFilesSizes =
      fileSizeLimit &&
      fileSizeLimit > 0 &&
      fileSizeInBytes.some((fileSize) => getFileSizeValidation(fileSize));

    const hasInvalidFiles = hasInvalidFileExtensions || hasInvalidFilesSizes;

    if (hasInvalidFileExtensions) {
      setHasInvalidFiles(
        invalidFileError ??
          '1 or more files you attempted to add are invalid and were ignored.'
      );
    } else if (hasInvalidFilesSizes) {
      setHasInvalidFiles(
        fileSizeError ??
          '1 or more file sizes you attempted to add are invalid and were ignored.'
      );
    } else {
      setHasInvalidFiles(undefined);
    }

    return !hasInvalidFiles;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileObj: FileUploadRegionFileProperties[] = getFilesObject(files);
    const fileSizesInBytes = Array.from(files).map((file) => file.size);
    //using null guard safety here
    if (!validateFiles(fileObj, fileSizesInBytes)) return;
    setInnerFileNames([...innerFileNames, ...fileObj]);
    onChange?.({
      event: e,
      files: fileObj,
    });
  };

  const removeEvent = (fileId: string) => {
    const updatedFiles = innerFileNames.filter(
      (file) => file.fileId !== fileId
    );
    setInnerFileNames(updatedFiles);
  };

  const handleDrag = (
    e: DragEvent<HTMLDivElement>,
    shouldSetDragOver: boolean
  ) => {
    e.preventDefault();
    if (isDisabled) return;
    setIsDragOver(shouldSetDragOver);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    handleDrag(e, true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    handleDrag(e, false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    handleDrag(e, true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    handleDrag(e, false);
    if (isDisabled) return;

    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    const fileObj: FileUploadRegionFileProperties[] = getFilesObject(files);
    const fileSizesInBytes = Array.from(files).map((file) => file.size);

    if (!validateFiles(fileObj, fileSizesInBytes)) return;

    if (onChange) {
      onChange({
        event: e,
        files: fileObj,
      });
    } else {
      setInnerFileNames([...innerFileNames, ...fileObj]);
    }
  };

  const handleClick = () => {
    const input = document.getElementById(
      'sds_fileUploadRegion_input'
    ) as HTMLInputElement | null;
    input?.click();
  };

  const childrenArray = Array.isArray(children) ? children : [children];
  let helptext: ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === HelpText) helptext = item;
    }
  });

  const files = (
    !!controlledFiles === false ? innerFileNames : controlledFiles
  ) as FileUploadRegionFileProperties[];

  const acceptedFilesArray = acceptedFiles
    ?.split(',')
    .map((e) => e.trim().replace(/^\s*\./, ''));

  return {
    helptext,
    innerFileNames: files,
    fileTypes,
    isDragOver,
    hasInvalidFiles,
    handleChange,
    handleClick,
    removeEvent,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};
