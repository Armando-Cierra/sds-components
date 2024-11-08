import { ReactNode } from 'react';

type ColumnInfo = {
  column: number;
  leftPosition: string;
};

export interface TableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
  displayStackAt?: number;
}

export interface UseTableProps {
  children: ReactNode;
  displayStackAt?: number;
}

export type TableContextType = {
  columnsSizes: string;
  fixedColumns?: ColumnInfo[];
  fillStyle?: 'solid' | 'striped';
  borderStyle?: 'ruled' | 'grid' | 'none';
  isScrolled: boolean;
};

export type TableStackContextType = {
  fillStyle?: 'solid' | 'striped';
  borderStyle?: 'ruled' | 'none';
};
