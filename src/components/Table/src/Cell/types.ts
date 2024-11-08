import { ReactNode } from 'react';

export interface TableCellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  isFixed?: boolean;
  leftFixedPosition?: string;
  isLastFixedColumn?: boolean;
  isTableScrolled?: boolean;
  alignment?: 'left' | 'center' | 'right' | 'spaceBetween';
  ref?: never;
}
