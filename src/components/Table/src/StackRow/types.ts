import { ReactNode } from 'react';

export interface TableStackRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  columnsSizes?: string;
  ref?: never;
}
