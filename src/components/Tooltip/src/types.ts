import type { ReactNode } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'right' | 'left';

export interface TooltipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  delayDuration?: number;
  position?: TooltipPosition;
  /**
   * How much spacing you want the message/html to have with the children
   * @defaultValue 5
   */
  spacing?: number;
  /**
   *  @description You can either add your own HTML structure, or simply add a message
   */
  message?: ReactNode;
  ref?: never;
}
