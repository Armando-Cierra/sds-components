import { ReactNode } from 'react';

export interface OrderListProps
  extends React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  > {
  className?: string;
  children: ReactNode;
  type?: '1' | 'A' | 'a' | 'I' | 'i';
  ref?: never;
}

export interface UnorderListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
}

export interface ListContextProps {
  isOrdered?: boolean;
}
