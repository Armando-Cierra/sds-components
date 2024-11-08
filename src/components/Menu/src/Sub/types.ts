import type * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';

export interface MenuSubProps
  extends React.FC<DropdownMenu.DropdownMenuSubProps> {
  className?: string;
  children?: ReactNode;
  ref?: never;
}
