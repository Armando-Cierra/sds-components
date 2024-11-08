import type { ReactNode } from 'react';

export interface AvatarGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  className?: string;
  visibleUsers?: number;
  overcountText?: string;
  ref?: never;
}
