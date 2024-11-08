import type { ReactNode } from 'react';
import type { AnimatedComponent } from 'react-spring';
import type { AvailableTelicon } from '../../Telicon';
export type AnimatedDivProps = Omit<AnimatedComponent<'div'>, '$$typeof'>;

export type Variant = 'default' | 'success' | 'danger' | 'warning';

export interface BannerProps extends AnimatedDivProps {
  className?: string;
  heading?: string;
  hideIcon?: boolean;
  children: ReactNode;
  isOpen: boolean;
  display?: 'block' | 'overlay';
  zIndex?: number;
  variant?: Variant;
  icon?: AvailableTelicon;
  onClose?: () => void;
}
