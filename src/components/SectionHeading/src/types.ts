import type { ReactNode } from 'react';

export interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  variant?: 'solid' | 'ruled' | 'flat';
  ref?: never;
}
