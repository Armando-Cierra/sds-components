import { ReactNode } from 'react';

export interface ActionsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  ref?: never;
}
