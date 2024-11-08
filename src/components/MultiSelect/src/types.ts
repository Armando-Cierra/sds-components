import type { ReactNode } from 'react';

export interface MultiSelectProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
  ref?: never;
}

export interface UseMultiSelectProps {
  children: ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
}
