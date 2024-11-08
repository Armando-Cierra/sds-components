import type { ReactNode } from 'react';

export interface SingleDatePickerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  hasError?: boolean;
  ref?: never;
}

export interface UseSingleDatePickerProps {
  children: ReactNode;
  hasError?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}
