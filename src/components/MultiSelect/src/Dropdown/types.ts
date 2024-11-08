import type { ReactNode } from 'react';

export interface MultiSelectDropdownProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  placeholder?: string;
  counter?: number;
  hasError?: boolean;
  defaultOpen?: boolean;
  isDisabled?: boolean;
  menuClassName?: string;
}
