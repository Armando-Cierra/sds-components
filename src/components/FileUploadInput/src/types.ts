import type { ReactNode } from 'react';

export interface FileUploadInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  ref?: never;
}
