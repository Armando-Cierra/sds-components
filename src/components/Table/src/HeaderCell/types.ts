import { ReactNode } from 'react';

export interface TableHeaderCellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode | string;
  isFixed?: boolean;
  leftFixedPosition?: string;
  isLastFixedColumn?: boolean;
  isTableScrolled?: boolean;
  alignment?: 'left' | 'center' | 'right' | 'spaceBetween';
  ref?: never;
}
