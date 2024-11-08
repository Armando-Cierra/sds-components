import type { ReactNode } from 'react';
import type { BadgeColors } from '../../../Badge';
import type { AvailableTelicon } from '../../../Telicon';

export interface AppTemplateSidebarContentGroupItem
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  icon?: AvailableTelicon;
  avatar?: string;
  avatarProfilePic?: string;
  isLoading?: boolean;
  children?: ReactNode;
  isActive?: boolean;
  notification?: string;
  notificationColor?: BadgeColors;
  collapseSidebarOnMobile?: () => void;
  ref?: never;
}
