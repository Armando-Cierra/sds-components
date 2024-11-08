import { ReactNode } from 'react';

export interface SelectionListTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
}
