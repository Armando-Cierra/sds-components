import type { AvailableTelicon } from '../../Telicon';

export type Status =
  | 'none'
  | 'online'
  | 'busy'
  | 'away'
  | 'ringing'
  | 'onCall'
  | 'onExternalCall'
  | 'recovery'
  | 'offline';

type Size = 'default' | 'small' | 'large';

export interface AvatarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  size?: Size;
  status?: Status;
  showIcon?: boolean;
  icon?: AvailableTelicon;
  profilePic?: string;
  children?: string;
  ref?: never;
  shape?: 'circle' | 'square';
}
