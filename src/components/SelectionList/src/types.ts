import type { ReactNode } from 'react';

export interface SelectionListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  layout?: 'list' | 'grid';
  listGap?: number;
  gridColumnsNumber?: number;
  gridRowGap?: number;
  gridColumnGap?: number;
  children: ReactNode;
  ref?: never;
}

export interface UseSelectionListProps {
  layout: 'list' | 'grid';
  listGap: number;
  gridColumnsNumber: number;
  gridRowGap: number;
  gridColumnGap: number;
  children: ReactNode;
}
