import { ReactNode } from 'react';

export interface TableHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
}

export interface UseTableHeaderProps {
  children: ReactNode;
}
