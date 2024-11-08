import type { ReactNode } from 'react';

export interface WizardReviewStepSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  children: ReactNode;
  onButtonClick?: () => void;
}
