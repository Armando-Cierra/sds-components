import { ReactNode } from 'react';

export interface TableStackProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  fillStyle?: 'solid' | 'striped';
  borderStyle?: 'ruled' | 'none';
  ref?: never;
}
