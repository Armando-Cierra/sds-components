import { ReactNode } from 'react';
import type { AvailableTelicon } from '../../Telicon';

export interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  className?: string;
  children: string;
  infoIcon?: AvailableTelicon;
  info?: ReactNode;
  isRequired?: boolean;
  ref?: never;
}
