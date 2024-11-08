import type { ReactNode } from 'react';
import type { AvailableTelicon } from '../../Telicon';
import type { ToastPosition } from 'react-toastify';

export interface ToastProps {
  className?: string;
  variant?: 'default' | 'subtle';
  stacked?: boolean;
  autoclose?: number | false | undefined;
  limit?: number;
  ref?: never;
  customPosition?: {
    top?: number | 'auto';
    bottom?: number | 'auto';
    left?: number | 'auto';
    right?: number | 'auto';
  };
}

export interface ToastTriggerProps {
  icon?: AvailableTelicon;
  hideIcon?: boolean;
  content?: ReactNode;
  position?: ToastPosition;
}

export interface ToastSubtleTriggerProps {
  icon?: AvailableTelicon;
  content?: ReactNode;
  position?: ToastPosition;
}
