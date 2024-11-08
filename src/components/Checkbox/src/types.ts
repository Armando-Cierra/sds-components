import type { ReactNode } from 'react';

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  labelPosition?: 'before' | 'after';
  hasError?: boolean;
  isDisabled?: boolean;
  ref?: never;
}

export interface useCheckboxProps {
  children: ReactNode;
}
