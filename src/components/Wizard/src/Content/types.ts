import type { ReactNode } from 'react';

export interface WizardContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: ReactNode;
  hasPadding?: boolean;
}
