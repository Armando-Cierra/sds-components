import type { ReactNode } from 'react';
import type { AnimatedComponent } from 'react-spring';

export type AnimatedDivProps = Omit<AnimatedComponent<'div'>, '$$typeof'>;

export interface ModalProps extends AnimatedDivProps {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  maxWidth?: string;
  height?: string;
  position?: 'top' | 'center';
  onClose?: () => void;
  ref?: never;
}

export interface useModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  maxWidth?: string;
  height?: string;
}
