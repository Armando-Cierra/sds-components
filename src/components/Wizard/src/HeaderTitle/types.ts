import type { ReactNode } from 'react';

export interface WizardHeaderTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
}
