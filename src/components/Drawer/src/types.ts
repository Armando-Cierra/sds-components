import type { ReactNode } from 'react';
import type { AnimatedComponent } from 'react-spring';

export type AnimatedDivProps = Omit<AnimatedComponent<'div'>, '$$typeof'>;
type Position = 'left' | 'right';

export interface DrawerProps extends AnimatedDivProps {
  className?: string;
  position?: Position;
  hideOverlay?: boolean;
  isOpen: boolean;
  maxWidth?: string;
  onClose?: () => void;
  children: ReactNode;
  ref?: never;
}

export interface UseDrawerProps {
  position?: Position;
  maxWidth?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
}
