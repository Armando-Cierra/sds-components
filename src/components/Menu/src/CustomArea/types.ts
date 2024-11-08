import type { ReactNode } from 'react';

export interface MenuCustomAreaProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
  ref?: never;
}
