import type { AvailableTelicon } from '../../Telicon';

export type Variant = 'default' | 'success' | 'danger' | 'warning';

export interface InlineNotificationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
  heading?: string;
  variant?: Variant;
  icon?: AvailableTelicon;
  hideIcon?: boolean;
  ref?: never;
}
