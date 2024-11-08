import type { HTMLAttributes, ReactNode } from 'react';

export interface TabGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: ReactNode;
  selectedTab?: string;
  isFlex?: boolean;
  defaultSelectedTab?: string;
  variant?: 'contained' | 'underlined';
  paddingStart?: boolean;
  ref?: never;
}

export interface useTabGroupProps {
  children: ReactNode;
  controlledSelection?: string;
  variant?: 'underlined' | 'contained';
  defaultSelectedTab?: string;
}
