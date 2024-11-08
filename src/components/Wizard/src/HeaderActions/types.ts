import type { ReactNode } from 'react';

export interface WizardHeaderActionsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
}
