import { ReactNode } from 'react';

export interface TableControlBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasPadding?: boolean;
  stackPadding?: boolean;
  ref?: never;
}
