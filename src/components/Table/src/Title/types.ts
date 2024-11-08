import { ReactNode } from 'react';

export interface TableTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasPadding?: boolean;
  stackPadding?: boolean;
  description?: string;
  ref?: never;
}
