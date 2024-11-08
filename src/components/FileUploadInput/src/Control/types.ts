import type React from 'react';

export interface ControlProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  defaultFileName?: string;
  fileName?: string;
  acceptedFiles?: string;
  explorerAcceptedFiles?: 'Audio' | 'Images' | 'All' | 'Video' | string;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
  ref?: never;
  onClear?: (e: FileUploadInputClearEvent) => void;
  onChange?: (e: FileUploadInputChangeEvent) => void;
}

export interface FileUploadInputChangeEvent
  extends React.ChangeEvent<HTMLInputElement> {
  file?: File | string;
  fileName?: string;
  fileExtension?: string;
  fileURL?: string;
}

export interface FileUploadInputClearEvent {
  file?: File | string;
  fileName?: string;
  fileExtension?: string;
  fileURL?: string;
}

export interface FileUploadUseControlProps extends ControlProps {
  inputId: string;
}
