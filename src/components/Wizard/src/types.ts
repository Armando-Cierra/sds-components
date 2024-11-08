import type { ReactNode } from 'react';

export interface WizardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  selectedStep: number;
  heading?: string;
}

export type useWizardProps = WizardProps;

export interface StepsList
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'id'
  > {
  id: number;
  title: string;
  isDisabled?: boolean;
  onClick: () => unknown;
  rest: Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'id'
  >;
}
