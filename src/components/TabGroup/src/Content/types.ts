import type { ReactNode } from 'react';

export interface TabGroupContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  ref?: never;
}
