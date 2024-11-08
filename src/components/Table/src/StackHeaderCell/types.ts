import { ReactNode } from 'react';

export interface TableStackHeaderCellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
  alignment?: 'left' | 'center' | 'right' | 'spaceBetween';
  ref?: never;
}
