import { ReactNode } from 'react';

export interface TableContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  columnsSizes?: string;
  fixedColumns?: {
    column: number;
    leftPosition: string;
  }[];
  fillStyle?: 'solid' | 'striped';
  borderStyle?: 'ruled' | 'grid' | 'none';
  ref?: never;
}
