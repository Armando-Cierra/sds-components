import type { ReactNode } from 'react';

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: ReactNode;
  ref?: never;
}
