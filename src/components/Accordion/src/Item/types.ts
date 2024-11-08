import type { ChangeEvent, ReactNode } from 'react';
import type { AvailableTelicon } from '../../../Telicon';

export interface AccordionItemChangeEvent
  extends ChangeEvent<HTMLInputElement> {
  selected: boolean;
}

export interface AccordionItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'ruled' | 'contained';
  defaultExpanded?: boolean;
  isExpanded?: boolean;
  children?: ReactNode;
  collapsedIndicatorIcon?: AvailableTelicon;
  expandedIndicatorIcon?: AvailableTelicon;
  ref?: never;
  onChange?: (e: AccordionItemChangeEvent) => void;
}
