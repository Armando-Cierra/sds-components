import { ReactNode } from 'react';

export interface ContainerListContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  classNames?: string;
  children?: ReactNode;
  ref?: never;
}
