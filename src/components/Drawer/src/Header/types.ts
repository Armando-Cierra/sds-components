import type { AvailableTelicon } from '../../../Telicon';

type Position = 'left' | 'right';

export interface DrawerHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: string;
  drawerPosition?: Position;
  closeButtonPosition?: Position;
  closeButtonIcon?: AvailableTelicon;
  hideCloseButton?: boolean;
  ref?: never;
  onClose?: () => void;
}
