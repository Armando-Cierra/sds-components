import { ReactNode } from 'react';

export interface TableStackCellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  asLabel?: boolean;
  children?: ReactNode;
  alignment?: 'left' | 'center' | 'right' | 'spaceBetween';
  ref?: never;
}
