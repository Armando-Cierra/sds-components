import { ReactNode } from 'react';

export interface TableRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  isSelected?: boolean;
  hasError?: boolean;
  ref?: never;
}
