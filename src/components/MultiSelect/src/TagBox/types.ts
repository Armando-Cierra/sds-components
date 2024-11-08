import type { ReactNode } from 'react';

export interface MultiSelectTagBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  isDisabled?: boolean;
}
