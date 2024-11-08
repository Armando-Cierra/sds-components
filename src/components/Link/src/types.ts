import type { ReactNode } from 'react';
import type { AvailableTelicon } from '../../Telicon/src/telicon-types';

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  className?: string;
  isUnderlined?: boolean;
  isDisabled?: boolean;
  iconBefore?: AvailableTelicon;
  iconAfter?: AvailableTelicon;
  ref?: never;
}
