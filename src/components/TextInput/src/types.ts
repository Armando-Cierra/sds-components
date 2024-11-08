import type { ReactNode } from 'react';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  ref?: never;
}
