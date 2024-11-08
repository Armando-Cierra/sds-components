import type { ReactNode } from 'react';

export type Sizes = 'default' | 'large' | 'small';

export interface ButtonGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  size?: Sizes;
  ref?: never;
}
