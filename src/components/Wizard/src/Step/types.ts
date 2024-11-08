import type { ReactNode } from 'react';

export interface WizardStepProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  isDisabled?: boolean;
  title: string;
}
