import type { ReactNode } from 'react';

export interface TabGroupTabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  value: string;
  isSelected?: boolean;
  className?: string;
  isDisabled?: boolean;
  children?: ReactNode | ReactNode[];
  ref?: never;
  variant?: 'underlined' | 'contained';
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
