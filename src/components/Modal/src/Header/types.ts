import type { ReactNode } from 'react';

export interface ModalHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
  hideCloseButton?: boolean;
  onClose?: () => void;
}
