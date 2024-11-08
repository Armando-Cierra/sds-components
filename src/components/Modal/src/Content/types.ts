import type { ReactNode } from 'react';

export interface ModalContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasPadding?: boolean;
  ref?: never;
}
