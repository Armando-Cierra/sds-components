import type { AnimatedComponent } from 'react-spring';
import type { AvailableTelicon } from '../../Telicon';

type Variants = 'info' | 'warning' | 'danger' | 'success';

export type AnimatedDivProps = Omit<AnimatedComponent<'div'>, '$$typeof'>;

export interface AlertProps extends AnimatedDivProps {
  className?: string;
  children: React.ReactNode;
  heading: string;
  variant?: Variants;
  isOpen?: boolean;
  hideIcon?: boolean;
  icon?: AvailableTelicon;
  position?: 'top' | 'center';
  ref?: never;
}

export interface useAlertProps {
  isOpen: boolean;
  variant: Variants;
  children: React.ReactNode;
  controlledIcon?: AvailableTelicon;
}
