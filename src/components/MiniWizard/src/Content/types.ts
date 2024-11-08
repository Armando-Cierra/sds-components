import type { ReactNode } from 'react';

export interface MiniWizardContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
}
