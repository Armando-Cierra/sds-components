import type { AvailableTelicon } from '../../../Telicon';
import type { BadgeColors } from '../../../Badge';

export interface AppTemplateTabBarItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  icon: AvailableTelicon;
  notification?: string;
  notificationColor?: BadgeColors;
  isActive?: boolean;
  ref?: never;
}
