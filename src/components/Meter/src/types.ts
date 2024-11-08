import type { ReactNode } from 'react';

export interface MeterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  ref?: never;
  labelPosition?: MeterLabelPositions;
}

export type MeterLabelPositions = 'after' | 'before' | 'below' | 'above';
