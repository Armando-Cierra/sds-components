import type { ReactNode } from 'react';
import type { AvailableTelicon } from '../../Telicon';

export interface AccordionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  selectedVisibility?: 'single' | 'multiple';
  variant?: 'ruled' | 'contained';
  collapsedIndicatorIcon?: AvailableTelicon;
  expandedIndicatorIcon?: AvailableTelicon;
  ref?: never;
}
