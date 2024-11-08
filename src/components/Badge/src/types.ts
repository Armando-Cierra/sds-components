import type { ReactNode } from 'react';
import type { AvailableTelicon } from '../../Telicon/src/telicon-types';

export type BadgeColors =
  | 'neutral'
  | 'inverted'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red'
  | 'indigo'
  | 'purple'
  | 'lime'
  | 'teal'
  | 'orange'
  | 'pink';

export interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  color?: BadgeColors;
  iconBefore?: AvailableTelicon;
  iconAfter?: AvailableTelicon;
  isCounter?: boolean;
  ref?: never;
}
