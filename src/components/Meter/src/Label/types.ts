import type { ReactNode } from 'react';
import type { MeterLabelPositions } from '../types';

export interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children?: ReactNode;
  ref?: never;
  labelPosition?: MeterLabelPositions;
}
