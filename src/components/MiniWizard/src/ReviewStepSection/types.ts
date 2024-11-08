import type { ReactNode } from 'react';

export interface ReviewStepSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  onButtonClick?: () => void;
}
