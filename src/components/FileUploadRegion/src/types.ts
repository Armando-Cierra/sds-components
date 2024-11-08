import type { ReactNode } from 'react';

export interface FileUploadRegionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
}
