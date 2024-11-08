import { ReactNode } from 'react';
import { AvailableTelicon } from '../../Telicon';

export interface EmptyMessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  variant?: 'subtle' | 'contrast';
  icon?: AvailableTelicon;
  image?: string;
  ref?: never;
}
