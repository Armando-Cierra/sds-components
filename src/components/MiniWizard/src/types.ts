import type { ReactNode } from 'react';
import type { ModalProps } from '../../Modal';

type ModalCustomProps = Omit<ModalProps, 'height' | 'maxWidth'>;
type CompletedStepBehavior = 'resetAtClosing' | 'notResetingAtClosing';

export interface MiniWizardProps extends ModalCustomProps {
  className?: string;
  heading: string;
  onClose: () => void;
  children: ReactNode;
  selectedStep: number;
  isOpen?: boolean;
  completedStepsBehavior?: CompletedStepBehavior;
}

export interface UseMiniWizardProps {
  children: ReactNode;
  selectedStep: number;
  isOpen?: boolean;
  completedStepsBehavior?: CompletedStepBehavior;
}

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
