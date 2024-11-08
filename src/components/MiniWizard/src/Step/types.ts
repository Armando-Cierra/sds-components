import type { ReactNode } from 'react';

export interface MiniWizardStepProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: () => unknown;
}
