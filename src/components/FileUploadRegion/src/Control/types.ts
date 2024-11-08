import type { ChangeEvent, DragEvent, ReactNode } from 'react';

export type FileSizeUnits = 'Byte' | 'KB' | 'MB' | 'GB';

export interface FileUploadRegionFileProperties {
  fileName: string;
  fileSize: string;
  fileURL?: string;
  fileId: string;
  fileExtension?: string;
}

export interface FileUploadRegionControlProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'onChange'
  > {
  ref?: never;
  files?: FileUploadRegionFileProperties[];
  defaultFileNames?: FileUploadRegionFileProperties[];
  regionDescription?: string;
  actionText?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  warningMessages?: WarningMessagesConfig;
  acceptedFiles?: 'All' | 'Images' | 'Audio' | 'Video' | string;
  fileSizeConfig?: FileSizeConfig;
  onFileRemove?: (fileId: string) => void;
  onChange?: (e: FileUploadRegionChangeEvent) => void;
}

interface FileSizeConfig {
  fileSizeLimit?: number;
  fileSizeUnit?: FileSizeUnits;
}

interface WarningMessagesConfig {
  fileSize?: ReactNode;
  invalidFile?: ReactNode;
}

export interface FileUploadRegionChangeEvent {
  files: FileUploadRegionFileProperties[];
  event?: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>;
}

export interface FileUploadRegionFileProps {
  file: FileUploadRegionFileProperties;
  isDisabled?: boolean;
  onFileRemove?: (fileId: string) => void;
  removeEvent?: (fileId: string) => void;
}

export type useControlProps = FileUploadRegionControlProps;
