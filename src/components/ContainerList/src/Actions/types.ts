import { ReactNode } from 'react';

export interface ContainerListActionsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
  ref?: never;
}
