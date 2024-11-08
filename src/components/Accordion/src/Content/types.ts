import type { ReactNode } from 'react';

export interface ContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  ref?: never;
}
