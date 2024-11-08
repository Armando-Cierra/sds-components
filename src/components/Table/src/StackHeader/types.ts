import { ReactNode } from 'react';

export interface TableStackHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  borderStyle?: 'ruled' | 'none';
  columnsSizes?: string;
  ref?: never;
}
