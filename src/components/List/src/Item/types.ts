import { ReactNode } from 'react';

export interface ListItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  className?: string;
  children: ReactNode;
  symbol?: string;
}
