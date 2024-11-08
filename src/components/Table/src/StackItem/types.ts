import { ReactNode } from 'react';

export interface TableStackItemProps
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
