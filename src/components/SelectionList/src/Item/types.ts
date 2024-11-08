import type { ChangeEvent, ReactNode } from 'react';
import type { AvailableTelicon } from '../../../Telicon';

export interface SelectionListItemProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  value?: string;
  icon?: AvailableTelicon;
  image?: string;
  imageLayout?: 'left' | 'top';
  controlType?: 'checkbox' | 'radio';
  hideControl?: boolean;
  children?: ReactNode;
  ref?: never;
}

export interface UseSelectionListItemProps {
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
