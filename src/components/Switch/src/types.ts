import type { ReactNode } from 'react';

export interface SwitchProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  labelPosition?: 'top' | 'left';
  isDisabled?: boolean;
  ref?: never;
}

export interface UseSwitchProps {
  children: ReactNode;
}
